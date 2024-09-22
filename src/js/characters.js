import { fetchCharactersByFilter } from './fetchCharacters';
import { addEventListenersForModal } from './modal-window';

const nameStartsWithInput = document.querySelector('[name="nameStartsWith"]');
const searchButton = document.querySelector('.search-form__button');

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  getCharactersByFilter();
});

nameStartsWithInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    getCharactersByFilter();
  }
});

async function getCharactersByFilter() {
  const loader = document.getElementById('loader');
  const cardList = document.querySelector('.cards');

  loader.style.display = 'block';
  cardList.style.display = 'none';

  try {
    const res = await fetchCharactersByFilter(nameStartsWithInput.value);
    createCardsMarkup(res);
  } catch (error) {
    console.error('Error fetching characters:', error);
  } finally {
    loader.style.display = 'none';
    cardList.style.display = 'flex';
  }
}

function createCardsMarkup(characters) {
  const cardList = document.querySelector('.cards');
  let markup = '';

  if (characters.length > 0) {
    markup = characters
      .map(
        char => `<li class="card" data-id="${char.id}" data-modal-open>
                <img class="card__img" src="${char.thumbnail.path}/portrait_uncanny.${char.thumbnail.extension}" alt="${char.name}">
                <p class="card__name">${char.name}</p>
            </li>`
      )
      .join('');
  } else {
    markup = `<div class="card-notification">
            <p class="card-notification__text">Try looking for something else..</p>
            <svg class="card-notification__svg" xmlns="http://www.w3.org/2000/svg" width="259" height="146" viewBox="0 0 259 146" fill="none">
                <path
                    d="M50.6437 13.7179C67.8429 31.6065 39.127 47.8872 21.7727 41.6849C28.3675 47.3536 26.8436 68.9829 1.51961 68.6306C26.8554 75.9969 22.7911 99.2222 12.7453 110.931C33.0048 100.405 56.3669 114.419 55.1102 132.39C63.5744 117.585 105.686 122.495 108.296 141.042C116.502 133.701 159.491 128.648 166.69 143.892C172.818 132.632 199.798 124.885 217.444 139.631C217.414 121.888 226.643 106.608 256.694 107.026C230.285 93.4207 234.201 56.8472 252.347 50.8337C230.503 55.482 214.11 33.6715 222.556 15.5604C211.968 29.5247 173.711 30.6528 164.538 11.5033C155.083 21.2767 126.683 13.9653 123.352 2.15445C124.144 11.8731 110.229 16.4583 96.9884 10.5634C93.2356 28.8775 55.8026 27.1041 50.6437 13.7179Z"
                    stroke="#34387F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>`;
  }

  cardList.innerHTML = markup;
  addEventListenersForModal();
}
