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


getHeroCharacters();
getRandomCharacters();

function getRandomCharacters() {
  const randomCharacters = [];

  for (let i = 0; i < 5; i++) {
    fetchRandomCharacters()
      .then((character) => {
        randomCharacters.push(character);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  createRandomSwiperMarkup(randomCharacters);
}

function getHeroCharacters() {
  const heroCharacterIds = [BLACK_PANTHER_ID, SPIDER_MAN_ID, HULK_ID];
  
  Promise.all(heroCharacterIds.map(fetchCharacterById))
    .then((heroCharacters) => {
      createHeroSwiperMarkup(heroCharacters);
    })
    .catch((error) => {
      console.error(error);
    });
}

async function fetchRandomCharacters() {
  const num = Math.floor(Math.random() * 1562) + 1;

  return axios.get(`${BASE_URL}?offset=${num}&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then((response) => {
        return response.data.data.results[0];
    });
}

async function fetchCharacterById(characterId) {
    return axios.get(`${BASE_URL}/${characterId}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
          return response.data.data.results[0];
      });
}


function createHeroSwiperMarkup(heroCharacters) {
    heroCharacters.forEach((char) => {
        let heroSwiperSlide;

        switch (char.name) {
            case 'Black Panther':
                char.image1 = img11;
                char.image2 = img12;
                char.description = 'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.'
                
                heroSwiperSlide = document.querySelector('[aria-label="1 / 3"]');
                break;
            case 'Spider-Man (Peter Parker)':
                char.name = 'Spider Man';
                char.image1 = img21;
                char.image2 = img22;
                char.description = 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.'
                heroSwiperSlide = document.querySelector('[aria-label="2 / 3"]');
                
                break;
            case 'Hulk':
                char.image1 = img31;
                char.image2 = img32;
                
                heroSwiperSlide = document.querySelector('[aria-label="3 / 3"]');
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
        
        heroSwiperSlide.innerHTML = markup;
    });
}

function createRandomSwiperMarkup(randomCharacters) {
  console.log(randomCharacters)
  for (let i = 0; i < randomCharacters.length; i++) {
    const char = randomCharacters[i];
    let randomSwiperSlide;
    
    if (char.description.length > 200) {
      char.description = char.description.substring(0, 200) + '...';
    }
    console.log('index: ' + i);

    randomSwiperSlide = document.querySelector(`'[data-index="${i}"]'`);
      
    const markup = `
      <img class="random-swiper-slide__img" src="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5269553f4bc6a/portrait_xlarge.jpg" alt="${char.name}">
        `;
      
      randomSwiperSlide.innerHTML = markup;
  }
  // randomCharacters.forEach((char) => {
  //   console.log(char)
    // let randomSwiperSlide;
    // if (char.description.length > 200) {
    //   char.description = char.description.substring(0, 200) + '...';
    // }
    // const index = randomCharacters.indexOf(char);
    // console.log('index: ' + index);

    // randomSwiperSlide = document.querySelector(`'[data-index="${index}"]'`);
      
    // const markup = `
    //   <img class="random-swiper-slide__img" src="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5269553f4bc6a/portrait_xlarge.jpg" alt="${char.name}">
    //     `;
      
    //   randomSwiperSlide.innerHTML = markup;
  // });
}