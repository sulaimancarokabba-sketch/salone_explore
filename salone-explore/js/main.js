// // Salone Explore - shared behaviour
// document.addEventListener('DOMContentLoaded', () => {
//   // mobile menu
//   const burger = document.querySelector('.burger'),
//     menu = document.querySelector('.menu');
//   burger && burger.addEventListener('click', () => menu.classList.toggle('open'));

//   // expandable search -> filters destination cards (or jumps to destinations page)
//   const s = document.querySelector('.search');
//   if (s) {
//     const input = s.querySelector('input');
//     s.querySelector('svg').addEventListener('click', () => {
//       s.classList.toggle('open');
//       if (s.classList.contains('open')) input.focus();
//     });
//     input.addEventListener('input', () => {
//       const q = input.value.trim().toLowerCase();
//       document.querySelectorAll('[data-search]').forEach(el => {
//         el.style.display = !q || el.dataset.search.toLowerCase().includes(q) ? '' : 'none';
//       });
//     });
//     input.addEventListener('keydown', e => {
//       if (e.key === 'Enter' && !document.querySelector('[data-search]')) {
//         location.href = 'destinations.html?q=' + encodeURIComponent(input.value);
//       }
//     });
//     const q = new URLSearchParams(location.search).get('q');
//     if (q && document.querySelector('[data-search]')) {
//       s.classList.add('open');
//       input.value = q;
//       input.dispatchEvent(new Event('input'));
//     }
//   }

//   // scroll reveal
//   const io = new IntersectionObserver(es => es.forEach(e => {
//     if (e.isIntersecting) {
//       e.target.classList.add('in');
//       io.unobserve(e.target)
//     }
//   }), {threshold: .12});
//   document.querySelectorAll('.reveal').forEach(el => io.observe(el));

//   // tacugama gallery
//   const main = document.querySelector('#mainImg');
//   document.querySelectorAll('.thumbs .img').forEach(t => t.addEventListener('click', () => {
//     document.querySelectorAll('.thumbs .img').forEach(x => x.classList.remove('on'));
//     t.classList.add('on');
//     main.style.setProperty('--img', t.style.getPropertyValue('--img'));
//   }));

//   // contact form validation
//   // const f = document.querySelector('form.msg');
//   // if (f) {
//   //   f.addEventListener('submit', e => {
//   //     e.preventDefault();
//   //     let ok = true;
//   //     f.querySelectorAll('[required]').forEach(i => {
//   //       const err = i.parentElement.querySelector('.err');
//   //       let bad = !i.value.trim();
//   //       if (i.type === 'email' && i.value) bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value);
//   //       if (err) err.style.display = bad ? 'block' : 'none';
//   //       if (bad) ok = false;
//   //     });
//   //     if (ok) {
//   //       const m = f.querySelector('.ok');
//   //       m.style.display = 'block';
//   //       f.reset();
//   //       setTimeout(() => m.style.display = 'none', 5000);
//   //     }
//   //   });
//   // }
// });
