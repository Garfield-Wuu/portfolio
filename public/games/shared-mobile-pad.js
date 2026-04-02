/**
 * 触屏 / 窄屏虚拟按键：向 window 派发 KeyboardEvent，与现有键盘逻辑兼容。
 * 在 <body data-mobile-pad="dpad|lr|ud|lr-fire|tetris|asteroids|jump|flap"> 时启用。
 */
(function () {
  'use strict';

  var layout = document.body.getAttribute('data-mobile-pad');
  if (!layout || layout === 'none') return;

  function shouldShow() {
    try {
      if (window.matchMedia('(pointer: coarse)').matches) return true;
      if ('ontouchstart' in window) return true;
      if (window.innerWidth <= 900) return true;
    } catch (e) {}
    return false;
  }

  if (!shouldShow()) return;

  document.documentElement.classList.add('arcade-mobile-host');
  document.body.classList.add('arcade-mobile-body');

  var REPEAT_MS = 80;

  function dispatch(type, code) {
    var key = code === 'Space' ? ' ' : code;
    var ev = new KeyboardEvent(type, {
      key: key,
      code: code,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(ev);
    document.dispatchEvent(ev);
  }

  function down(code) {
    dispatch('keydown', code);
  }
  function up(code) {
    dispatch('keyup', code);
  }

  function bindRepeat(el, code) {
    var timer = null;
    function start(e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      down(code);
      timer = setInterval(function () {
        down(code);
      }, REPEAT_MS);
      try {
        el.setPointerCapture(e.pointerId);
      } catch (err) {}
    }
    function end(e) {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      up(code);
      try {
        el.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
    el.addEventListener('pointerdown', start, { passive: false });
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('lostpointercapture', end);
  }

  function bindOnce(el, code) {
    el.addEventListener(
      'pointerdown',
      function (e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        down(code);
        setTimeout(function () {
          up(code);
        }, 40);
      },
      { passive: false },
    );
  }

  function makeBtn(label, cls) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'arcade-mobile-btn' + (cls ? ' ' + cls : '');
    b.textContent = label;
    b.setAttribute('aria-label', label);
    return b;
  }

  function spacer(wide) {
    var s = document.createElement('span');
    s.className = 'arcade-mobile-spacer' + (wide ? ' arcade-mobile-spacer--grow' : '');
    return s;
  }

  var root = document.createElement('div');
  root.id = 'arcade-mobile-pad';
  root.className = 'arcade-mobile-pad arcade-mobile-pad--' + layout;

  if (layout === 'dpad') {
    var r1 = document.createElement('div');
    r1.className = 'arcade-mobile-row';
    var r2 = document.createElement('div');
    r2.className = 'arcade-mobile-row';
    var r3 = document.createElement('div');
    r3.className = 'arcade-mobile-row';
    var bUp = makeBtn('▲');
    var bLf = makeBtn('◀');
    var bRt = makeBtn('▶');
    var bDn = makeBtn('▼');
    bindOnce(bUp, 'ArrowUp');
    bindOnce(bLf, 'ArrowLeft');
    bindOnce(bRt, 'ArrowRight');
    bindOnce(bDn, 'ArrowDown');
    r1.appendChild(spacer());
    r1.appendChild(bUp);
    r1.appendChild(spacer());
    r2.appendChild(bLf);
    r2.appendChild(spacer(true));
    r2.appendChild(bRt);
    r3.appendChild(spacer());
    r3.appendChild(bDn);
    r3.appendChild(spacer());
    root.appendChild(r1);
    root.appendChild(r2);
    root.appendChild(r3);
  } else if (layout === 'lr') {
    var bl = makeBtn('◀');
    var br = makeBtn('▶');
    bindRepeat(bl, 'ArrowLeft');
    bindRepeat(br, 'ArrowRight');
    root.appendChild(bl);
    root.appendChild(br);
  } else if (layout === 'ud') {
    var bu = makeBtn('▲');
    var bd = makeBtn('▼');
    bindRepeat(bu, 'ArrowUp');
    bindRepeat(bd, 'ArrowDown');
    root.appendChild(bu);
    root.appendChild(bd);
  } else if (layout === 'lr-fire') {
    var row = document.createElement('div');
    row.className = 'arcade-mobile-row arcade-mobile-row--stretch';
    var blf = makeBtn('◀');
    var brf = makeBtn('▶');
    bindRepeat(blf, 'ArrowLeft');
    bindRepeat(brf, 'ArrowRight');
    row.appendChild(blf);
    row.appendChild(brf);
    var fire = makeBtn('开火');
    bindOnce(fire, 'Space');
    root.appendChild(row);
    root.appendChild(fire);
  } else if (layout === 'tetris') {
    var tr = document.createElement('div');
    tr.className = 'arcade-mobile-row arcade-mobile-row--stretch';
    var t1 = makeBtn('◀');
    var t2 = makeBtn('▼');
    var t3 = makeBtn('▶');
    bindRepeat(t1, 'ArrowLeft');
    bindRepeat(t2, 'ArrowDown');
    bindRepeat(t3, 'ArrowRight');
    tr.appendChild(t1);
    tr.appendChild(t2);
    tr.appendChild(t3);
    var rot = makeBtn('旋转 ↻');
    bindOnce(rot, 'ArrowUp');
    root.appendChild(tr);
    root.appendChild(rot);
  } else if (layout === 'asteroids') {
    var ar = document.createElement('div');
    ar.className = 'arcade-mobile-row arcade-mobile-row--stretch';
    var aL = makeBtn('左转');
    var aR = makeBtn('右转');
    bindRepeat(aL, 'ArrowLeft');
    bindRepeat(aR, 'ArrowRight');
    ar.appendChild(aL);
    ar.appendChild(aR);
    var thrust = makeBtn('推进 ▲');
    bindRepeat(thrust, 'ArrowUp');
    var pew = makeBtn('射击');
    bindOnce(pew, 'Space');
    root.appendChild(ar);
    root.appendChild(thrust);
    root.appendChild(pew);
  } else if (layout === 'jump' || layout === 'flap') {
    var lab = layout === 'flap' ? '点按飞翔' : '跳跃';
    var jb = makeBtn(lab);
    jb.classList.add('arcade-mobile-btn--wide');
    bindOnce(jb, 'Space');
    root.appendChild(jb);
  }

  document.body.appendChild(root);
})();
