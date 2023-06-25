'use strict';

gsap.registerPlugin(ScrollTrigger);

const headerText = document.querySelectorAll('.text');
class SmoothScroll {
  constructor({ element = window, strength = 10, acceleration = 1.2, deceleration = 0.975 } = {}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this), { passive: false });
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), { passive: false });
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? (this.running = false) : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? (this.isDistanceAsc = false) : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);

      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new SmoothScroll({
  element: window,
  strength: 10,
  acceleration: 1.0,
  deceleration: 0.975,
});
let t1 = gsap.timeline();
let t2 = gsap.timeline();
t1.fromTo(
  '.nav-logo',
  {
    y: -180,
  },
  {
    y: 0,
    duration: 1,
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
  markers: true,
  start: 'top 50%',
  end: '100px 30%',
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
