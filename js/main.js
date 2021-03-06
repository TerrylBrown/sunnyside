'use strict';

const resizeAnimationStopper = (() => {
  let resizeTimer;

  const disableTimeout = () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  }

  const init = () => {
    window.addEventListener('resize', disableTimeout);
  }       

  return { init };
})();

resizeAnimationStopper.init();

const navToggle = (() => {
  const $navToggle = document.getElementById('nav-toggle');
  const $siteNav = document.getElementById('site-nav');

  const toggleMenu = (e) => {
    e.preventDefault();
    if ($siteNav.classList.contains('site-nav--active')) {
      $siteNav.classList.remove('site-nav--active');
      return;
    }
    $siteNav.classList.add('site-nav--active');
  };

  const init = () => {
    $navToggle.addEventListener('click', toggleMenu);
  };

  return { init };
})();

navToggle.init();

const smoothScroll = (() => {
  const $heroScrollBtn = document.getElementById('hero-scroll-btn');
  const $panelsTransform = document.getElementById('panels-transform');

  const scrollTop = (e, $el) => {
    e.preventDefault();

    const panelsTransformOffsetTop = $el.getBoundingClientRect().top;
    const documentSrollTop = document.documentElement.scrollTop;

    window.scroll({
      top: panelsTransformOffsetTop + documentSrollTop, 
      left: 0, 
      behavior: 'smooth'
    });
  };

  const init = () => {
    $heroScrollBtn.addEventListener('click', e => scrollTop(e, $panelsTransform));
  }

  return { init };
})();

smoothScroll.init();
