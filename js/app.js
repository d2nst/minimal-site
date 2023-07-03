'use strict';

gsap.registerPlugin(ScrollTrigger);

const headerText = document.querySelectorAll('.text');
const introWidth = document.querySelector('.intro');
let t1 = gsap.timeline();
let t2 = gsap.timeline();
t1.fromTo(
  ' .nav-logo',
  {
    y: -150,
  },
  {
    y: 0,
    duration: 0.5,
  }
);
t2.fromTo(
  '.nav-logo a',
  {
    scale: 3,
  },
  {
    scale: 1,
    duration: 0.5,
  }
);

// 로고 위치, 사이즈 변경
ScrollTrigger.create({
  animation: t1,
  start: 'top 50%',
  end: '100px 30%',
  trigger: '.nav-logo',
  scrub: 2.2,
});
ScrollTrigger.create({
  animation: t2,
  start: 'top 50%',
  end: 'bottom 30%',
  trigger: '.nav-logo',
  scrub: 2.2,
});

// 네브 사이즈 분기별로
const nav = document.querySelector('.nav-logo a');
ScrollTrigger.matchMedia({
  '(min-width: 1076px)': () => {
    nav.style.fontSize = '3.1rem';
  },
  '(min-width: 831px) and (max-width: 1075px)': () => {
    nav.style.fontSize = '2.4rem';
  },
  '(max-width: 830px)': () => {
    nav.style.fontSize = '4vw';
    nav.style.scale = 1;
  },
});

// 네브바 상단고정
ScrollTrigger.create({
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
      trigger: triggerElement,
      start: '-100% top',
      end: '30% top',
      scrub: 1,
    },
  });
  tl.to(targetElement, {
    y: '100%',
    duration: 1,
  });
});

// header 이미지 사이즈
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.header-circle',
    start: 'top top',
    end: '+=1020 ',
    scrub: 1,
  },
});
tl.fromTo(
  '.header-circle__box',
  {
    width: '35em',
    height: '35em',
    borderRadius: '35em',
    duration: 1,
  },
  {
    width: '100vw',
    height: '100vh',
    borderRadius: '0',
    duration: 1,
  }
);
// Light to Dark Color Change
const imgWrapOdd = document.querySelectorAll('.img__list:nth-child(odd)');

imgWrapOdd.forEach((item) => {
  let triggerElement = item;
  let targetElement = 'body, .container.o-nav';
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 20%',
      end: 'bottom bottom',
      scrub: 1,
      // markers: true,
    },
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: '#e8e2da',
      color: '#131514',
      duration: 1,
    },
    {
      backgroundColor: '#131514',
      color: '#e8e2da',
      duration: 1,
    }
  );
});

// Dark to Light Color Change
const contentWrap = document.querySelectorAll(
  '.img__list:nth-child(even), .header-circle__wrap'
);

contentWrap.forEach((item) => {
  let triggerElement = item;
  let targetElement = 'body, .container.o-nav';
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      // markers: true,
    },
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: '#131514',
      color: '#e8e2da',
      duration: 1,
    },
    {
      backgroundColor: '#e8e2da',
      color: '#131514',
      duration: 1,
    }
  );
});

// Title Change
document.querySelector('.title-list').classList.add('o-title');
const imgWrapper = document.querySelectorAll('.img__list');

imgWrapper.forEach((triggerElement, index) => {
  let myIndex = index;
  let targetElement = document.querySelectorAll('.title-list')[myIndex];

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom bottom',
      // pin: '.content__img',
      // anticipatePin: true,
      // pinSpacing: false,
      onEnter: () => {
        document.querySelectorAll('.title-list').forEach((item) => {
          item.classList.remove('o-title');
        });
        targetElement.classList.add('o-title');
      },
      onEnterBack: () => {
        document.querySelectorAll('.title-list').forEach((item) => {
          item.classList.remove('o-title');
        });
        targetElement.classList.add('o-title');
      },
    },
  });
});

// Contents Image Move 1
const firstImageMove = document.querySelectorAll('.listitem:nth-child(3n+1)');

firstImageMove.forEach((item) => {
  let triggerElement = item;
  let targetElement = item;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
  tl.to(targetElement, {
    y: '-30%',
    duration: 1,
  });
});

// Contents Image Move 2
const secondImageMove = document.querySelectorAll('.listitem:nth-child(3n+2)');

secondImageMove.forEach((item) => {
  let triggerElement = item;
  let targetElement = item;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  });
  tl.to(targetElement, {
    y: '-80%',
    duration: 1,
  });
});

// Contents Image Move 3
const thirdImageMove = document.querySelectorAll('.listitem:nth-child(3n+3)');

thirdImageMove.forEach((item) => {
  let triggerElement = item;
  let targetElement = item;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 3,
    },
  });
  tl.to(targetElement, {
    y: '-50%',
    duration: 1,
  });
});
