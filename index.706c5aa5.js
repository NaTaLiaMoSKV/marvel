let e=null,t=null,n="#34387F";function l(){const t=(window.innerWidth||document.documentElement.clientWidth)>=1200?"vertical":"horizontal";e&&e.destroy(!0,!0),e=new Swiper(".hero-swiper",{direction:t,slidesPerView:"auto",freeMode:!0,on:{slideChange:function(){const e=this.activeIndex,t=document.querySelector(".hero-button");switch(e){case 0:default:n="#34387F";break;case 1:n="#600404";break;case 2:n="#5B7F3C"}t.style.backgroundColor=n,a()}},scrollbar:{hide:!0},pagination:{el:".hero-swiper-pagination",bulletClass:"hero-swiper-pagination-bullet swiper-pagination-bullet",bulletActiveClass:"hero-swiper-pagination-bullet-active swiper-pagination-bullet-active",clickable:!0}})}function a(){const e=document.querySelectorAll(".random-bullet__name"),t=document.querySelectorAll(".random-bullet__description");for(let l=0;l<5;l++)null!==e[l].closest(".random-swiper-pagination-bullet-active")?(e[l].style.color=n,t[l].style.color=n):(e[l].style.color="#FAFAFA",t[l].style.color="rgba(250, 250, 250, 0.50)")}l(),function(){t&&t.destroy(!0,!0);t=new Swiper(".random-swiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,on:{slideChange:()=>a()},scrollbar:{hide:!0},pagination:{el:".random-swiper-pagination",loop:!0,autoplay:{delay:3500},renderBullet:function(e,t){return 0===e?`<div class="${t}" style="opacity:1" data-index="${e}">\n                        <p class="random-bullet__name" style="color: ${n}">Name ${e}</p>\n                        <p class="random-bullet__description" style="color: ${n}">\n                        Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank Pym) and The Wasp (Janet van Dyne), helps trains her father’s successor Scott Lang and secure the destruction of the Yellowjacket technology.</p>\n                        </div>`:`<div class="${t}" style="opacity:1" data-index="${e}">\n                    <p class="random-bullet__name" style="color: #FAFAFA" >Name ${e}</p>\n                    <p class="random-bullet__description" style="color: rgba(250, 250, 250, 0.50)" >Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank Pym) and The Wasp (Janet van Dyne), helps trains her father’s successor Scott Lang and secure the destruction of the Yellowjacket technology.</p>\n                    </div>`},bulletClass:"random-swiper-pagination-bullet swiper-pagination-bullet",bulletActiveClass:"random-swiper-pagination-bullet-active swiper-pagination-bullet-active",clickable:!0}})}(),window.addEventListener("resize",(function(){l()}));
//# sourceMappingURL=index.706c5aa5.js.map
