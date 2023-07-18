import axios from 'axios';
import md5 from 'md5';

import img11 from './images/hero1.1_desktop.png'
import img12 from './images/hero1.2_desktop.png'
import img21 from './images/hero2.1_desktop.png'
import img22 from './images/hero2.2_desktop.png'
import img31 from './images/hero3.1_desktop.png'
import img32 from './images/hero3.2_desktop.png'

const HULK_ID = '1009351';
const SPIDER_MAN_ID = '1009610';
const BLACK_PANTHER_ID = '1009187';

const PUBLIC_KEY = '3b19de822bbdb85fd464fb1da19ae275'; 
const PRIVATE_KEY = 'f26e701f59fc8c3169b6ee92603774e03d9615c5';
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';

const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

function fetchCharacterById(characterId) {
    return axios.get(`${BASE_URL}/${characterId}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then((response) => {
            return response.data.data.results[0];
        });
}

const heroCharacterIds = [BLACK_PANTHER_ID, SPIDER_MAN_ID, HULK_ID ];

Promise.all(heroCharacterIds.map(fetchCharacterById))
  .then((heroCharacters) => {
        console.log(heroCharacters);
        createHeroSwiperMarkup(heroCharacters);
  })
  .catch((error) => {
    console.error(error);
  });


function createHeroSwiperMarkup(heroCharacters) {
    heroCharacters.forEach((char) => {
        let swiperSlide;

        switch (char.name) {
            case 'Black Panther':
                char.image1 = img11;
                char.image2 = img12;
                char.description = 'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.'
                
                swiperSlide = document.querySelector('[aria-label="1 / 3"]');
                break;
            case 'Spider-Man (Peter Parker)':
                char.name = 'Spider Man';
                char.image1 = img21;
                char.image2 = img22;
                char.description = 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.'
                swiperSlide = document.querySelector('[aria-label="2 / 3"]');
                
                break;
            case 'Hulk':
                char.image1 = img31;
                char.image2 = img32;
                
                swiperSlide = document.querySelector('[aria-label="3 / 3"]');
                char.description = 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.'
                break;
        }
        
        const markup = `
         <div class="hero-swiper__container hero-swiper__first-container">
              <img class="hero-swiper__img1" src="${char.image1}" alt="${char.name}" width=352 height=540>
            </div>
            <div class="hero-swiper__container hero-swiper__second-container">
              <img class="hero-swiper__img2 " src="${char.image2}" alt="${char.name}" width=352 height=540>
              <div class="hero-swiper__text-effect">
                <p class="hero-swiper__text">${char.name}</p>
              </div>
             
              <div class="hero-swiper__description-container">
                <p class="hero-swiper__description-title">Characters</p>
                <p class="hero-swiper__description-text">${char.description}</p>
              </div>
            </div>
            `;
        
        swiperSlide.innerHTML = markup;
    });
  }
