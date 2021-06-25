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
