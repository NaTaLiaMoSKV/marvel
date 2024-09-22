let heroSwiper = null;
let lastSlideChangeTime = 0;
let activeColor = '#34387F';
let activeIndex = 0;

initHeroSwiper();

window.addEventListener('resize', function () {
  initHeroSwiper();
});

function initHeroSwiper() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;
  const direction = screenWidth >= 1200 ? 'vertical' : 'horizontal';

  if (heroSwiper) {
    heroSwiper.destroy(true, true);
  }

  heroSwiper = new Swiper('.hero-swiper', {
    direction: direction,
    slidesPerView: 'auto',
    freeMode: true,
    speed: 1000,
    autoplay: {
      enabled: true,
      delay: 3000,
    },
    allowTouchMove: false,
    on: {
      slideChange: function () {
        const screenWidth =
          window.innerWidth || document.documentElement.clientWidth;

        if (screenWidth > 768) {
          activeIndex = this.activeIndex;
          const heroButton = document.querySelector('.hero-button');
          const randomButton = document.querySelector('.random-button');
          const copyrightSection = document.querySelector('.copyright-section');
          switch (activeIndex) {
            case 0:
              activeColor = '#34387F';
              break;
            case 1:
              activeColor = '#600404';
              break;
            case 2:
              activeColor = '#5B7F3C';
              break;
            default:
              activeColor = '#34387F';
          }
          heroButton.style.backgroundColor = activeColor;
          randomButton.style.backgroundColor = activeColor;
          copyrightSection.style.backgroundColor = activeColor;
        }
      },
    },

    scrollbar: {
      hide: true,
    },

    pagination: {
      el: '.hero-swiper-pagination',
      bulletClass: 'hero-swiper-pagination-bullet swiper-pagination-bullet',
      bulletActiveClass:
        'hero-swiper-pagination-bullet-active swiper-pagination-bullet-active',
      clickable: true,
    },
  });
}
