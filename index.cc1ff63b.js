let e=null,t="#34387F",i=0;function n(){const n=(window.innerWidth||document.documentElement.clientWidth)>=1200?"vertical":"horizontal";e&&e.destroy(!0,!0),e=new Swiper(".hero-swiper",{direction:n,slidesPerView:"auto",freeMode:!0,speed:1e3,autoplay:{enabled:!0,delay:3e3},allowTouchMove:!1,on:{slideChange:function(){i=this.activeIndex;const e=document.querySelector(".hero-button"),n=document.querySelector(".random-button");switch(i){case 0:default:t="#34387F";break;case 1:t="#600404";break;case 2:t="#5B7F3C"}e.style.backgroundColor=t,n.style.backgroundColor=t}},scrollbar:{hide:!0},pagination:{el:".hero-swiper-pagination",bulletClass:"hero-swiper-pagination-bullet swiper-pagination-bullet",bulletActiveClass:"hero-swiper-pagination-bullet-active swiper-pagination-bullet-active",clickable:!0}})}n(),window.addEventListener("resize",(function(){n()}));
//# sourceMappingURL=index.cc1ff63b.js.map
