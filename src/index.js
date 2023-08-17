// import img11 from './images/hero1.1_desktop.png'
// import img12 from './images/hero1.2_desktop.png'
// import img21 from './images/hero2.1_desktop.png'
// import img22 from './images/hero2.2_desktop.png'
// import img31 from './images/hero3.1_desktop.png'
// import img32 from './images/hero3.2_desktop.png'
// import { fetchCharacterById, fetchRandomCharacters } from './js/fetchCharacters'

// const HULK_ID = '1009351';
// const SPIDER_MAN_ID = '1009610';
// const BLACK_PANTHER_ID = '1009187';


// const heroCharacters = [
//   {
//     id: '1009351',
//     name: 'Black Panther',
//     image1: img11,
//     image2: img12,
//     description: 'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.'
//   },
//   {
//     id: '1009610',
//     name: 'Spider Man',
//     image1: img21,
//     image2: img22,
//     description: 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.'
//   },
//   {
//     id: '1009187',
//     name: 'Hulk',
//     image1: img31,
//     image2: img32,
//     description: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.'
//   },
// ]
// getHeroCharacters();
// function getHeroCharacters() {
//   // const heroCharacterIds = [BLACK_PANTHER_ID, SPIDER_MAN_ID, HULK_ID];
//   createHeroSwiperMarkup(heroCharacters);
// //   Promise.all(heroCharacterIds.map(fetchCharacterById))
// //     .then((heroCharacters) => {
// //       createHeroSwiperMarkup(heroCharacters);
// //       console.log(heroCharacters)
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// }


// function createHeroSwiperMarkup(heroCharacters) {
//     heroCharacters.forEach((char) => {
//         let heroSwiperSlide;

//         switch (char.name) {
//             case 'Black Panther':                
//                 heroSwiperSlide = document.querySelector('[aria-label="1 / 3"]');
//                 break;
//             case 'Spider Man':
//                 heroSwiperSlide = document.querySelector('[aria-label="2 / 3"]');
//                 break;
//             case 'Hulk':
//                 heroSwiperSlide = document.querySelector('[aria-label="3 / 3"]');
//                 break;
//         }
        
//         const markup = `
        //  <div class="hero-swiper__container hero-swiper__first-container">
        //       <img class="hero-swiper__img1" src="${char.image1}" alt="${char.name}" width=352 height=540>
        //     </div>
        //     <div class="hero-swiper__container hero-swiper__second-container">
        //       <img class="hero-swiper__img2 " src="${char.image2}" alt="${char.name}" width=352 height=540>
        //       <div class="hero-swiper__text-effect">
        //         <p class="hero-swiper__text">${char.name}</p>
        //       </div>
             
        //       <div class="hero-swiper__description-container">
        //         <p class="hero-swiper__description-title">Characters</p>
        //         <p class="hero-swiper__description-text">${char.description}</p>
        //       </div>
        //     </div>
//             `;
        
//         heroSwiperSlide.innerHTML = markup;
//     });
// }
