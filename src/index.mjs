// const PUBLIC_KEY = '3b19de822bbdb85fd464fb1da19ae275';

// const PRIVATE_KEY = 'f26e701f59fc8c3169b6ee92603774e03d9615c5';
// const axios = require('axios');

const HULK_ID = '1009351';
const SPIDER_MAN_ID = '';
const BLACK_PANTHER_ID = '';
import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = '3b19de822bbdb85fd464fb1da19ae275'; // Ваш публичный ключ Marvel API
const PRIVATE_KEY = 'f26e701f59fc8c3169b6ee92603774e03d9615c5'; // Ваш приватный ключ Marvel API

const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY); // Вычисляем хэш

const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
console.log('updated');
// axios
//   .get(BASE_URL, {
//       params: {
//         characterId: HULK_ID,
//         ts: timestamp,
//         apikey: PUBLIC_KEY,
//         hash: hash,
//     },
//   })
//     .then((response) => {
//         const data = response.data;
//         console.log('updated')
//         console.log(data);
//         // console.log(data.data.results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });