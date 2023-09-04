import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = '3b19de822bbdb85fd464fb1da19ae275'; 
const PRIVATE_KEY = 'f26e701f59fc8c3169b6ee92603774e03d9615c5';
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
const COMICS_URL = 'https://gateway.marvel.com/v1/public/comics';

const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export async function fetchCharacterById(characterId) {
    return axios.get(`${BASE_URL}/${characterId}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
          return response.data.data.results[0];
      });
}

export async function fetchComicById(comicId) {
    return axios.get(`${COMICS_URL}/${comicId}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
          return response.data.data.results[0];
      });
}

export async function fetchComics(characterId) {
    return axios.get(`${BASE_URL}/${characterId}/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
          return response.data.data.results;
      });
}

export async function fetchComicCharacters(comicId) {
    return axios.get(`https://gateway.marvel.com/v1/public/comics/${comicId}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
          return response.data.data.results;
      });
}

export async function fetchCreator(resourceURI) {
    const updatedResourseIRI = resourceURI.replace("http://", "https://");
    return axios.get(`${updatedResourseIRI}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then((response) => {
          return response.data.data.results[0];   
      });
}

export async function fetchCharactersByFilter( nameStartsWith, orderBy, modifiedSince) {
    const params = []

    if (nameStartsWith !== '') {
        params.push(`nameStartsWith=${nameStartsWith}&`)
    }

    if (orderBy !== '') {
        params.push(`orderBy=${orderBy}&`)
    }

    if (modifiedSince !== '') {
        params.push(`modifiedSince=${modifiedSince}&`)
    }

    const queryString = params.join('');

    return axios.get(`${BASE_URL}?${queryString}ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then((response) => {
            return response.data.data.results;
        });
}
