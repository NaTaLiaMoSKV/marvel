
const HULK_ID = '1009351';
const SPIDER_MAN_ID = '1009610';
const BLACK_PANTHER_ID = '1009187'; //id: 1011130, name: 'Black Panther (Ultimate)'
const heroCharacters = [];

import axios from 'axios';
import md5 from 'md5';


const heroSwiperWrapper = document.querySelector('.swiper-wrapper');

const PUBLIC_KEY = '3b19de822bbdb85fd464fb1da19ae275'; // Ваш публичный ключ Marvel API
const PRIVATE_KEY = 'f26e701f59fc8c3169b6ee92603774e03d9615c5'; // Ваш приватный ключ Marvel API

const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY); // Вычисляем хэш

const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';

function fetchCharacterById(characterId) {
    return axios.get(`${BASE_URL}/${characterId}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then((response) => {
            const res = response.data.data.results[0]
            if (res.name === 'Black Panther') res.description = 'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.'
            return res;
        });
}

const heroCharacterIds = [BLACK_PANTHER_ID, SPIDER_MAN_ID, HULK_ID, ];

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
        if (char.name === 'Spider-Man (Peter Parker)') char.name = 'Spider Man';
        let swiperSlide;
        // const markup = `<div class="swiper-effect">
        //   <p class="swiper-text">${char.name}</p>
        //     </div>
        //     `;
        const markup = `<div class="swiper-effect">
          <img src="${char.thumbnail.path}/portrait_xlarge.${char.thumbnail.extension}" alt="${char.name}" width=220>
                <p class="swiper-text">${char.name}</p>
            </div>
            `;
        const heroButton = document.querySelector('.hero-button');
        
        switch (char.name) {
            case 'Black Panther':
                swiperSlide = document.querySelector('[aria-label="1 / 3"]');
                swiperSlide.innerHTML = markup;
                break;
            case 'Spider Man':
                swiperSlide = document.querySelector('[aria-label="2 / 3"]');
                swiperSlide.innerHTML = markup;
                break;
            case 'Hulk':
                swiperSlide = document.querySelector('[aria-label="3 / 3"]');
                swiperSlide.innerHTML = markup;
                break;
        }

       
        
    });
  }
