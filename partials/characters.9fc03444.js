!function(){function n(n,e,i,t){Object.defineProperty(n,e,{get:i,set:t,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},a=i.parcelRequirea407;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in c){var e=c[n];delete c[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){c[n]=e},i.parcelRequirea407=a),a.register("iE7OH",(function(e,i){var t,c;n(e.exports,"register",(function(){return t}),(function(n){return t=n})),n(e.exports,"resolve",(function(){return c}),(function(n){return c=n}));var a={};t=function(n){for(var e=Object.keys(n),i=0;i<e.length;i++)a[e[i]]=n[e[i]]},c=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("aNJCr",(function(e,i){var t;n(e.exports,"getBundleURL",(function(){return t}),(function(n){return t=n}));var c={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(n){var e=c[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),c[n]=e),e}})),a("iE7OH").register(JSON.parse('{"e6U35":"characters.9fc03444.js","4KppS":"placeholder3.c0dfba28.jpg","jSf26":"index.6f876239.js"}'));var o,s=a("47liv");s=a("47liv");o=a("aNJCr").getBundleURL("e6U35")+"../"+a("iE7OH").resolve("4KppS");const r=document.querySelector("[data-modal]"),l=document.querySelector(".modal-card"),d=document.querySelector("[data-modal-close]");function m(){v(),window.addEventListener("keydown",u),document.addEventListener("click",_),d.addEventListener("click",f)}function f(){r.classList.add("is-hidden"),p()}function u(n){27!=n.keyCode||r.classList.contains("is-hidden")||(r.classList.add("is-hidden"),p(),window.removeEventListener("keydown",u))}function _(n){n.target.classList.contains("backdrop")&&(r.classList.add("is-hidden"),p(),document.removeEventListener("click",_))}function h(n){const e=new Date(n),i=e.getDate();return`${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${i}, ${e.getFullYear()}`}function p(){const n=`<div class="modal-images">\n                <img class="modal-images__main-img" src=${e(o)} alt="main image">\n                </div>\n                <div class="modal-info">\n                    <div class="modal-info__character">\n                        <div class="modal-info__character-info">\n                            <h2 class="modal-info__character-name">Character name</h2>\n                            <p class="modal-info__character-date">last modified date</p>\n                        </div>\n                        <p class="modal-info__character-description">\n                            Character description\n                        </p>\n                    </div>\n                    <div class="modal-info__comics">\n                        <h2 class="modal-info__comics-name">List of comics</h2>\n                        \n                        <ul class="modal-info__comics-list">\n                            <li class="modal-info__comics-item" data-modal-comics>\n                                <img class="modal-info__comics-img" src=${e(o)} alt="comics">\n                                <h3 class="modal-info__comics-title"></h3>\n                                <p class="modal-info__comics-author"></p>\n                            </li>\n                            <li class="modal-info__comics-item" data-modal-comics>\n                                <img class="modal-info__comics-img" src=${e(o)} alt="comics">\n                                <h3 class="modal-info__comics-title"></h3>\n                                <p class="modal-info__comics-author"></p>\n                            </li>\n                            <li class="modal-info__comics-item" data-modal-comics>\n                                <img class="modal-info__comics-img" src=${e(o)} alt="comics">\n                                <h3 class="modal-info__comics-title"></h3>\n                                <p class="modal-info__comics-author"></p>\n                            </li>\n                        </ul>\n                    </div>\n                </div>`;l.innerHTML=n}function v(){document.querySelectorAll(".card").forEach((n=>{n.addEventListener("click",(async n=>{r.classList.remove("is-hidden");const e=n.currentTarget.dataset.id,i=await(0,s.fetchCharacterById)(e);await async function(n){let e="";const i=await(0,s.fetchComics)(n.id);if(0!==i.length){let n="";for(let e=0;e<3;e++){const t=i[e];t.title.length>18&&(t.title=t.title.substring(0,20)+" ..."),t.creators.items[0]||(t.creators.items[0]={name:"Without author"}),n+=`\n                <li class="modal-info__comics-item" data-id="${t.id}" data-modal-comics>\n                    <img class="modal-info__comics-img" data-id=${t.id} src="${t.thumbnail.path}/portrait_xlarge.${t.thumbnail.extension}" alt="comics">\n                    <h3 class="modal-info__comics-title">${t.title}</h3>\n                    <p class="modal-info__comics-author">${t.creators.items[0].name}</p>\n                </li>\n            `}e=`\n            <h2 class="modal-info__comics-name">List of comics</h2>\n            <ul class="modal-info__comics-list">\n                ${n}\n            </ul>\n        `}else e='<h2 class="modal-info__comics-name">No comics with the character</h2>';""==n.description&&(n.description=`${n.name} is one of the characters in the marvel universe. To read the comics of this character, click on the cover of the comic.`);const t=`\n        <div class="modal-images">\n            <img class="modal-images__main-img" src="${n.thumbnail.path}/portrait_xlarge.${n.thumbnail.extension}" alt="${n.name}">\n        </div>\n        <div class="modal-info">\n            <div class="modal-info__character">\n                <div class="modal-info__character-info">\n                    <h2 class="modal-info__character-name">${n.name}</h2>\n                    <p class="modal-info__character-date">${h(n.modified)}</p>\n                </div>\n                <p class="modal-info__character-description">\n                    ${n.description}\n                </p>\n            </div>\n            <div class="modal-info__comics">\n                ${e}\n            </div>\n        </div> `;l.innerHTML=t,document.querySelectorAll(".modal-info__comics-item").forEach((n=>{n.addEventListener("click",(async n=>{const e=n.currentTarget.dataset.id,i=await(0,s.fetchComicById)(e);await async function(n){let e="",i="",t="unknown",c="";const a=await(0,s.fetchComicCharacters)(n.id);if(0!==a.length){let n="",i=a.length<10?a.length:9;for(let e=0;e<i;e++){const i=a[e];i.name.length>20&&(i.name=i.name.substring(0,18)+" ..."),n+=`\n               <li class="comic__character card" data-id=${i.id}>\n                    <img class="comic__character-img" src="${i.thumbnail.path}/standard_xlarge.${i.thumbnail.extension}" alt="comic character">\n                    <p class="comic__character-name">${i.name}</p>\n                </li>\n            `}e=`\n            <h3 class="comic-info__title">Characters</h3>\n                <ul class="comic__characters">\n                    ${n}\n                </ul>\n        `}else e='<h3 class="comic-info__title">No characters in the comic</h3>';if(n.creators.items[0]){const e=await(0,s.fetchCreator)(n.creators.items[0].resourceURI);c=`\n            <h3 class="comic-info__title">Creator</h3>\n            <div class="creator">\n                <img class="creator__img" src="${e.thumbnail.path}/standard_xlarge.${e.thumbnail.extension}" alt="creator">\n                <div class="creator__info">\n                    <p class="creator__job">Writer</p>\n                    <p class="creator__name">${e.fullName}</p>\n                </div>\n            </div>`,i=`${e.fullName} |`}""==n.description&&(n.description=`${n.title} is one of the comics in the marvel universe.`),n.dates[0].date&&(t=n.dates[0].date.substring(0,4)),com=n.prices.find((n=>"printPrice"===n.type)),price=(10*com.price).toFixed(2);const o=`\n        <div class="modal-images">\n            <img class="modal-images__comic-img" src="${n.thumbnail.path}/portrait_xlarge.${n.thumbnail.extension}" alt="main image">\n        </div>\n        <div class="comic-info">\n            <div>\n                <div class="comic-info__main">\n                    <h2 class="comic-info__main-title">${n.title}</h2>\n                    <p class="comic-info__main-date">${i} ${h(n.modified)}</p>\n                </div>\n                <p class="comic-info__main-description">\n                    ${n.description}\n                </p>\n            </div>\n            <div class="comic-info__criterions">\n                <ul class="comic-info__list">\n                    <li class="comic-info__item">\n                        <p class="comic-info__criterion">FORMAT</p>\n                        <p class="comic-info__value">${n.format}</p>\n                    </li>\n                    <li class="comic-info__item">\n                        <p class="comic-info__criterion">year released</p>\n                        <p class="comic-info__value">${t}</p>\n                    </li>\n                    <li class="comic-info__item">\n                        <p class="comic-info__criterion">pAGES</p>\n                        <p class="comic-info__value">${n.pageCount}</p>\n                    </li>\n                    <li class="comic-info__item">\n                        <p class="comic-info__criterion">pRICE</p>\n                        <p class="comic-info__value">$${price}</p>\n                    </li>\n                </ul>\n            </div>\n            <div class="comic-info__creator">\n                ${c}\n            </div>\n            <div class="comic-info__characters">\n               ${e}\n            </div>\n            \n        </div>\n    `;l.innerHTML=o,v()}(i),window.addEventListener("keydown",u),document.addEventListener("click",_),d.addEventListener("click",f)}))}))}(i),window.addEventListener("keydown",u),document.addEventListener("click",_),d.addEventListener("click",f)}))}))}const g=document.querySelector(".dropdown-toggle"),$=document.querySelector(".dropdown-list"),w=document.querySelector(".dropdown-text"),y=document.querySelectorAll(".dropdown-item"),C=document.querySelector('[name="date"]'),L=document.querySelector('[name="nameStartsWith"]'),x=document.querySelector('[name="comics"]'),E=document.querySelectorAll(".search-form__button");async function b(){w.textContent;const n=x.value,e=L.value,i=w.textContent.toLowerCase(),t="name"==i?"":C.value;!function(n){const e=document.querySelector(".cards");let i="";i=n.length>0?n.map((n=>`<li class="card" data-id="${n.id}" data-modal-open>\n                <img class="card__img" src="${n.thumbnail.path}/portrait_uncanny.${n.thumbnail.extension}" alt="${n.name}">\n                <p class="card__name">${n.name}</p>\n            </li>`)).join(""):'<div class="card-notification">\n            <p class="card-notification__text">Try looking for something else..</p>\n            <svg class="card-notification__svg" xmlns="http://www.w3.org/2000/svg" width="259" height="146" viewBox="0 0 259 146" fill="none">\n                <path\n                    d="M50.6437 13.7179C67.8429 31.6065 39.127 47.8872 21.7727 41.6849C28.3675 47.3536 26.8436 68.9829 1.51961 68.6306C26.8554 75.9969 22.7911 99.2222 12.7453 110.931C33.0048 100.405 56.3669 114.419 55.1102 132.39C63.5744 117.585 105.686 122.495 108.296 141.042C116.502 133.701 159.491 128.648 166.69 143.892C172.818 132.632 199.798 124.885 217.444 139.631C217.414 121.888 226.643 106.608 256.694 107.026C230.285 93.4207 234.201 56.8472 252.347 50.8337C230.503 55.482 214.11 33.6715 222.556 15.5604C211.968 29.5247 173.711 30.6528 164.538 11.5033C155.083 21.2767 126.683 13.9653 123.352 2.15445C124.144 11.8731 110.229 16.4583 96.9884 10.5634C93.2356 28.8775 55.8026 27.1041 50.6437 13.7179Z"\n                    stroke="#34387F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />\n            </svg>\n        </div>';e.innerHTML=i,m()}(await(0,s.fetchCharactersByFilter)(n,e,i,t))}!function(){const n=new Date,e=n.getFullYear();let i=n.getMonth()+1,t=n.getDate();i=i<10?"0"+i:i,t=t<10?"0"+t:t,C.value=`${e}-${i}-${t}`,C.setAttribute("max",`${e}-${i}-${t}`)}(),g.addEventListener("click",(function(n){n.preventDefault(),$.classList.toggle("show"),y.forEach((n=>{n.textContent==w.textContent&&n.classList.add("active")}))})),document.addEventListener("click",(function(n){const e=n.target;g.contains(e)||$.contains(e)||$.classList.remove("show")})),$.addEventListener("click",(function(n){n.target!==$&&w.textContent!==n.target.textContent&&(w.textContent=n.target.textContent,$.classList.remove("show"),y.forEach((n=>{n.classList.remove("active")})),b())})),C.addEventListener("change",(function(n){b()})),w.addEventListener("input",(function(n){b()})),E.forEach((n=>{n.addEventListener("click",(function(n){n.preventDefault(),b()}))}))}();
//# sourceMappingURL=characters.9fc03444.js.map
