import {
  fetchCharacterById,
  fetchComics,
  fetchComicById,
  fetchComicCharacters,
  fetchCreator,
} from './fetchCharacters';
import placeholderImage from '../images/placeholder3.jpg';

const body = document.querySelector('body');
const modal = document.querySelector('[data-modal]');
const modalCard = document.querySelector('.modal-card');
const modalClose = document.querySelector('[data-modal-close]');

export function addEventListenersForModal() {
  addCharactersButtonsEventListener();

  window.addEventListener('keydown', onKeyDown);
  document.addEventListener('click', onBackdropClick);
  modalClose.addEventListener('click', onModalCloseBtnClick);
}

function onModalCloseBtnClick() {
  modal.classList.add('is-hidden');
  body.classList.remove('modal-open');
  renderPlaceholderMarkup();
}

function onKeyDown(e) {
  if (e.keyCode == 27 && !modal.classList.contains('is-hidden')) {
    modal.classList.add('is-hidden');
    body.classList.remove('modal-open');
    renderPlaceholderMarkup();
    window.removeEventListener('keydown', onKeyDown);
  }
}

function onBackdropClick(e) {
  if (e.target.classList.contains('backdrop')) {
    modal.classList.add('is-hidden');
    body.classList.remove('modal-open');
    renderPlaceholderMarkup();
    document.removeEventListener('click', onBackdropClick);
  }
}

function renderTime(inputTime) {
  const date = new Date(inputTime);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedTime = `${month} ${day}, ${year}`;

  return formattedTime;
}

function renderPlaceholderMarkup() {
  const placeholderMarkup = `
            <div class="modal-images">
            <div id="modal-loader"></div>
                <img class="modal-images__main-img" src=${placeholderImage} alt="main image">
                </div>
                <div class="modal-info">
                    <div class="modal-info__character">
                        <div class="modal-info__character-info">
                            <h2 class="modal-info__character-name">Character name</h2>
                            <p class="modal-info__character-date">last modified date</p>
                        </div>
                        <p class="modal-info__character-description">
                            Character description
                        </p>
                    </div>
                    <div class="modal-info__comics">
                        <h2 class="modal-info__comics-name">List of comics</h2>
                        
                        <ul class="modal-info__comics-list">
                            <li class="modal-info__comics-item" data-modal-comics>
                                <img class="modal-info__comics-img" src=${placeholderImage} alt="comics">
                                <h3 class="modal-info__comics-title"></h3>
                                <p class="modal-info__comics-author"></p>
                            </li>
                            <li class="modal-info__comics-item" data-modal-comics>
                                <img class="modal-info__comics-img" src=${placeholderImage} alt="comics">
                                <h3 class="modal-info__comics-title"></h3>
                                <p class="modal-info__comics-author"></p>
                            </li>
                            <li class="modal-info__comics-item" data-modal-comics>
                                <img class="modal-info__comics-img" src=${placeholderImage} alt="comics">
                                <h3 class="modal-info__comics-title"></h3>
                                <p class="modal-info__comics-author"></p>
                            </li>
                        </ul>
                    </div>
                </div>`;
  modalCard.innerHTML = placeholderMarkup;
}

function addCharactersButtonsEventListener() {
  const modalOpenButtons = document.querySelectorAll('.card');

  modalOpenButtons.forEach(item => {
    item.addEventListener('click', async e => {
      modal.classList.remove('is-hidden');
      body.classList.add('modal-open');

      const characterId = e.currentTarget.dataset.id;
      const character = await fetchCharacterById(characterId);

      await renderCharacterModalCard(character);

      window.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', onBackdropClick);
      modalClose.addEventListener('click', onModalCloseBtnClick);
    });
  });
}

function addComicsButtonsEventListener() {
  const modalComicsOpenButtons = document.querySelectorAll(
    '.modal-info__comics-item'
  );

  modalComicsOpenButtons.forEach(item => {
    item.addEventListener('click', async e => {
      const comicId = e.currentTarget.dataset.id;
      const comic = await fetchComicById(comicId);
      await renderComicModalMarkup(comic);

      window.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', onBackdropClick);
      modalClose.addEventListener('click', onModalCloseBtnClick);
    });
  });
}

async function renderCharacterModalCard(char) {
  let comicsListMarkup = '';
  let comics;
  const html = document.querySelector('html');
  console.log(html);
  html.style.cursor = 'wait';

  try {
    comics = await fetchComics(char.id);
  } catch (error) {
    console.error('Error fetching character:', error);
  } finally {
    html.style.cursor = 'auto';
  }
  //   const comics = await fetchComics(char.id);

  if (comics.length !== 0) {
    let comicsMarkup = '';

    for (let i = 0; i < 3; i++) {
      const com = comics[i];

      if (window.innerWidth > 768) {
        if (com.title.length > 17) {
          com.title = com.title.substring(0, 16) + ' ...';
        }
      }

      if (!com.creators.items[0]) {
        com.creators.items[0] = { name: 'Without author' };
      }
      comicsMarkup += `
                <li class="modal-info__comics-item" data-id="${com.id}" data-modal-comics>
                    <img class="modal-info__comics-img" data-id=${com.id} src="${com.thumbnail.path}/portrait_fantastic.${com.thumbnail.extension}" alt="comics">
                    <h3 class="modal-info__comics-title">${com.title}</h3>
                    <p class="modal-info__comics-author">${com.creators.items[0].name}</p>
                </li>
            `;
    }

    comicsListMarkup = `
            <h2 class="modal-info__comics-name">List of comics</h2>
            <ul class="modal-info__comics-list">
                ${comicsMarkup}
            </ul>
        `;
  } else
    comicsListMarkup =
      '<h2 class="modal-info__comics-name">No comics with the character</h2>';

  if (char.description.trim() == '' || !char.description) {
    char.description = `${char.name} is one of the characters in the marvel universe. To read the comics of this character, click on the cover of the comic.`;
  }

  const markup = `
        <div class="modal-images">
            <img class="modal-images__main-img" src="${
              char.thumbnail.path
            }/portrait_uncanny.${char.thumbnail.extension}" alt="${char.name}">
        </div>
        <div class="modal-info">
            <div class="modal-info__character">
                <div class="modal-info__character-info">
                    <h2 class="modal-info__character-name">${char.name}</h2>
                    <p class="modal-info__character-date">${renderTime(
                      char.modified
                    )}</p>
                </div>
                <p class="modal-info__character-description">
                    ${char.description}
                </p>
            </div>
            <div class="modal-info__comics">
                ${comicsListMarkup}
            </div>
        </div> `;

  modalCard.innerHTML = markup;
  addComicsButtonsEventListener();
}

async function renderComicModalMarkup(comic) {
  let charactersListMarkup = '';
  let creatorName = '';
  let comicDate = 'unknown';
  let creatorMarkup = '';
  const characters = await fetchComicCharacters(comic.id);

  if (characters.length !== 0) {
    let charactersMarkup = '';
    let count = characters.length < 10 ? characters.length : 9;

    for (let i = 0; i < count; i++) {
      const char = characters[i];

      if (char.name.length > 20) {
        char.name = char.name.substring(0, 20) + ' ...';
      }

      charactersMarkup += `
               <li class="comic__character card" data-id=${char.id}>
                    <img class="comic__character-img" src="${char.thumbnail.path}/standard_fantastic.${char.thumbnail.extension}" alt="comic character">
                    <p class="comic__character-name">${char.name}</p>
                </li>
            `;
    }
    charactersListMarkup = `
            <h3 class="comic-info__title">Characters</h3>
                <ul class="comic__characters">
                    ${charactersMarkup}
                </ul>
        `;
  } else
    charactersListMarkup =
      '<h3 class="comic-info__title">No characters in the comic</h3>';

  if (comic.creators.items[0]) {
    const creator = await fetchCreator(comic.creators.items[0].resourceURI);
    creatorMarkup = `
            <h3 class="comic-info__title">Creator</h3>
            <div class="creator">
                <img class="creator__img" src="${creator.thumbnail.path}/standard_fantastic.${creator.thumbnail.extension}" alt="creator">
                <div class="creator__info">
                    <p class="creator__job">Writer</p>
                    <p class="creator__name">${creator.fullName}</p>
                </div>
            </div>`;
    creatorName = `${creator.fullName} |`;
  }

  if (
    (comic.description !== null && comic.description.trim() == '') ||
    !comic.description
  ) {
    comic.description = `${comic.title} is one of the comics in the marvel universe.`;
  }

  if (comic.dates[0].date) {
    comicDate = comic.dates[0].date.substring(0, 4);
  }

  const com = comic.prices.find(price => price.type === 'printPrice');
  const price = (com.price * 10).toFixed(2);

  const markup = `
        <div class="modal-images">
            <img class="modal-images__comic-img" src="${
              comic.thumbnail.path
            }/portrait_uncanny.${comic.thumbnail.extension}" alt="main image">
        </div>
        <div class="comic-info">
            <div>
                <div class="comic-info__main">
                    <h2 class="comic-info__main-title">${comic.title}</h2>
                    <p class="comic-info__main-date">${creatorName} ${renderTime(
    comic.modified
  )}</p>
                </div>
                <p class="comic-info__main-description">
                    ${comic.description}
                </p>
            </div>
            <div class="comic-info__criterions">
                <ul class="comic-info__list">
                    <li class="comic-info__item">
                        <p class="comic-info__criterion">FORMAT</p>
                        <p class="comic-info__value">Comic</p>
                    </li>
                    <li class="comic-info__item">
                        <p class="comic-info__criterion">year released</p>
                        <p class="comic-info__value">${comicDate}</p>
                    </li>
                    <li class="comic-info__item">
                        <p class="comic-info__criterion">pAGES</p>
                        <p class="comic-info__value">${comic.pageCount}</p>
                    </li>
                    <li class="comic-info__item">
                        <p class="comic-info__criterion">pRICE</p>
                        <p class="comic-info__value">$${price}</p>
                    </li>
                </ul>
            </div>
            <div class="comic-info__creator">
                ${creatorMarkup}
            </div>
            <div class="comic-info__characters">
               ${charactersListMarkup}
            </div>
            
        </div>
    `;
  modalCard.innerHTML = markup;
  addCharactersButtonsEventListener();
}
