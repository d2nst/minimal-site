'use strict';

gsap.registerPlugin(ScrollTrigger);

const headerText = document.querySelectorAll('.text');

let t1 = gsap.timeline();
let t2 = gsap.timeline();
t1.fromTo(
  '.nav-logo',
  {
    y: -180,
  },
  {
    y: 0,
    duration: 0.5,
  }
);
t2.fromTo(
  '.nav-logo a',
  {
    scale: 4.8,
  },
  {
    scale: 1,
    duration: 1,
  }
);

// 로고 위치, 사이즈 변경
ScrollTrigger.create({
  animation: t1,
  // markers: true,
  start: 'top 50%',
  end: '300px 30%',
  trigger: '.nav-logo',
  scrub: 2.2,
});
ScrollTrigger.create({
  animation: t2,
  // markers: true,
  start: 'top 50%',
  end: 'bottom 30%',
  trigger: '.nav-logo',
  scrub: 2.2,
});

// 네브바 상단고정

ScrollTrigger.create({
  // markers: true,
  start: 'top top',
  trigger: '.wrap',
  toggleClass: { targets: 'nav', className: 'active' },
});

//텍스트 숨김
headerText.forEach((item) => {
  let triggerElement = item.parentElement;
  let targetElement = item;
  let tl = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      trigger: triggerElement,
      start: '-100% top',
      end: '30% top',
      scrub: 0.8,
    },
  });
  tl.to(targetElement, {
    y: '100%',
    duration: 1,
  });
});
