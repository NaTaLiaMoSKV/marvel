
let heroSwiper = null;
let randomSwiper = null;
let activeColor = "#34387F";

initHeroSwiper();
initRandomSwiper();

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
        on: {
            slideChange: function () {
                const activeIndex = this.activeIndex;
                const heroButton = document.querySelector('.hero-button');

                switch (activeIndex) {
                    case 0:;
                        activeColor = '#34387F';
                    break;
                    case 1:
                        activeColor = '#600404'
                    break;
                    case 2:
                        activeColor = '#5B7F3C'
                    break;
                    default:
                        activeColor = '#34387F'
                }
                heroButton.style.backgroundColor = activeColor;
                updateRandomBullets();
            }
        },

        scrollbar: {
            hide: true,
        },

        pagination: {
            el: '.hero-swiper-pagination',

            bulletClass: 'hero-swiper-pagination-bullet swiper-pagination-bullet',
            bulletActiveClass: 'hero-swiper-pagination-bullet-active swiper-pagination-bullet-active',
            clickable: true,
        },
    });
}


function initRandomSwiper() {
    if (randomSwiper) {
        randomSwiper.destroy(true, true);
    }

    randomSwiper = new Swiper('.random-swiper', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        on: {
            slideChange: () => updateRandomBullets()
        },

        scrollbar: {
            hide: true,
        },

        pagination: {
            el: '.random-swiper-pagination',
            loop: true,
            autoplay: {
                delay: 3500, 
            },
            
            renderBullet: function (index, className) {
                if (index === 0) {
                    return `<div class="${className}" style="opacity:1" data-index="${index}">
                        <p class="random-bullet__name" style="color: ${activeColor}">Name ${index}</p>
                        <p class="random-bullet__description" style="color: ${activeColor}">
                        Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank Pym) and The Wasp (Janet van Dyne), helps trains her father’s successor Scott Lang and secure the destruction of the Yellowjacket technology.</p>
                        </div>`;
                }
                return `<div class="${className}" style="opacity:1" data-index="${index}">
                    <p class="random-bullet__name" style="color: #FAFAFA" >Name ${index}</p>
                    <p class="random-bullet__description" style="color: rgba(250, 250, 250, 0.50)" >Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank Pym) and The Wasp (Janet van Dyne), helps trains her father’s successor Scott Lang and secure the destruction of the Yellowjacket technology.</p>
                    </div>`;
            },
            bulletClass: 'random-swiper-pagination-bullet swiper-pagination-bullet',
            bulletActiveClass: 'random-swiper-pagination-bullet-active swiper-pagination-bullet-active',
            clickable: true,
        },
    });
    
}
    
function updateRandomBullets() {
    const randomBulletNames = document.querySelectorAll('.random-bullet__name');
    const randomBulletDescriptions = document.querySelectorAll('.random-bullet__description');

    for (let i = 0; i < 5; i++) {
        if (randomBulletNames[i].closest('.random-swiper-pagination-bullet-active') !== null) {
            randomBulletNames[i].style.color = activeColor;
            randomBulletDescriptions[i].style.color = activeColor;
        } else {
            randomBulletNames[i].style.color = '#FAFAFA';
            randomBulletDescriptions[i].style.color = 'rgba(250, 250, 250, 0.50)';
        }
    }
}