document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav'), menu = document.getElementById('menu');

  document.getElementById('burger').addEventListener('click', function () { menu.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menu.classList.remove('open'); }); });

  // sticky shadow + scrollspy
  var links = menu.querySelectorAll('a'), secs = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('sc', window.scrollY > 60);
    var cur = '';
    secs.forEach(function (s) { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
    links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + cur); });
  });

  // animated counters
  var done = false, stats = document.getElementById('stats');
  function run() {
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var t = +el.dataset.t, s = el.dataset.s, c = 0, step = t / 60;
      var i = setInterval(function () {
        c += step;
        if (c >= t) { c = t; clearInterval(i); }
        el.textContent = Math.floor(c) + s;
      }, 25);
    });
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e, o) {
      if (e[0].isIntersecting && !done) { done = true; run(); o.disconnect(); }
    }, { threshold: .4 }).observe(stats);
  } else { run(); }

  // reveal on scroll
  var items = document.querySelectorAll('.card,.svc>div,.adv>div,.docs>div,.news article,.feat');
  items.forEach(function (el) { el.style.opacity = 0; el.style.transform = 'translateY(24px)'; el.style.transition = 'opacity .6s, transform .6s'; });
  var ro = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; ro.unobserve(e.target); }
    });
  }, { threshold: .15 });
  items.forEach(function (el) { ro.observe(el); });

  // form validation
  var form = document.getElementById('form'), msg = document.getElementById('msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = false;
    [['fn', function (v) { return v.trim().length > 1; }],
     ['em', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }],
     ['ph', function (v) { return v.trim().length >= 7; }],
     ['dt', function (v) { return !!v; }]].forEach(function (f) {
      var el = document.getElementById(f[0]), ok = f[1](el.value);
      el.classList.toggle('err', !ok); if (!ok) bad = true;
    });
    msg.className = 'msg ' + (bad ? 'bad' : 'ok');
    msg.textContent = bad ? 'Please fill in all required fields correctly.' : 'Thank you! Your appointment request has been received. We will contact you shortly.';
    if (!bad) form.reset();
  });
});