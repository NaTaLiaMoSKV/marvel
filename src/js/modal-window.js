import { fetchCharacterById, fetchComics } from "./fetchCharacters";

const modal = document.querySelector('[data-modal]');
const modalCard = document.querySelector('.modal-card');

export function addEventListenersForModal() {
    const modal = document.querySelector('[data-modal]');
    const modalClose = document.querySelector('[data-modal-close]');
    const modalOpenButtons = document.querySelectorAll('.card');

    modalOpenButtons.forEach(item => {
        item.addEventListener('click', async (e) => {
            modal.classList.remove('is-hidden');
            const characterId = e.currentTarget.dataset.id;
            const character = await fetchCharacterById(characterId);
            renderCharacterModalCard(character);

            window.addEventListener('keydown', onKeyDown);
            document.addEventListener('click', onBackdropClick);
            modalClose.addEventListener('click', onModalCloseBtnClick);
        });
    });
}

function onModalCloseBtnClick() {
    modal.classList.add('is-hidden');
} 

function onKeyDown(e) {
    if (e.keyCode == 27 && !modal.classList.contains('is-hidden')) {
        modal.classList.add('is-hidden');
        window.removeEventListener('keydown', onKeyDown);
    }
}
    
function onBackdropClick(e) {
    if (e.target.classList.contains('backdrop')) {
        modal.classList.add('is-hidden');
        document.removeEventListener('click', onBackdropClick);
    }
}

async function renderCharacterModalCard(char) {
    let comicsListMarkup = '';
    const comics = await fetchComics(char.id);
    
    for (let i = 0; i < 3; i++) {
        const com = comics[i];

        if (com.title.length > 21) {
            com.title = com.title.substring(0, 20) + ' ...';
        }

        comicsListMarkup += `
            <li class="modal-info__comics-item">
                <img class="modal-info__comics-img" data-id=${com.id} src="${com.thumbnail.path}/portrait_xlarge.${com.thumbnail.extension}" alt="comics">
                <h3 class="modal-info__comics-title">${com.title}</h3>
                <p class="modal-info__comics-author">${com.creators.items[0].name}</p>
            </li>
        `;
    }

    if (char.description == '') {
        char.description = `${char.name} is one of the characters in the marvel universe. To read the comics of this character, click on the cover of the comic.`
    }

    const markup = `
        <div class="modal-images">
            <img class="modal-images__main-img" src="${char.thumbnail.path}/portrait_xlarge.${char.thumbnail.extension}" alt="${char.name}">
        </div>
        <div class="modal-info">
            <div class="modal-info__character">
                <div class="modal-info__character-info">
                    <h2 class="modal-info__character-name">${char.name}</h2>
                    <p class="modal-info__character-date">${char.modified}</p>
                </div>
                <p class="modal-info__character-description">
                    ${char.description}
                </p>
            </div>
            <div class="modal-info__comics">
                <h2 class="modal-info__comics-name">List of comics</h2>
                <ul class="modal-info__comics-list">
                    ${comicsListMarkup}
                </ul>
            </div>
        </div> `;
    
    modalCard.innerHTML = markup;
}
