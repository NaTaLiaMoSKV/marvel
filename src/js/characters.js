const dropdownToggle = document.querySelector('.dropdown-toggle');
const dateInput = document.querySelector('.search-form__date-input');
// const openCalendarButton = document.querySelector('.date-input__button');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownText = document.querySelector('.dropdown-text');
const dropdownItems = document.querySelectorAll('.dropdown-item');

//open dropdown
dropdownToggle.addEventListener('click', function (event) {
    event.preventDefault();
    dropdownList.classList.toggle('show');
    dropdownItems.forEach(item => {
        if (item.textContent == dropdownText.textContent) {
            item.classList.add('active')
        }
    })
});

// close dropdown
document.addEventListener('click', function (event) {
    // event.preventDefault();
    
    const targetElement = event.target;
    if (!dropdownToggle.contains(targetElement) && !dropdownList.contains(targetElement)) {
        dropdownList.classList.remove('show');
    }
});


// choose dropdown item
dropdownList.addEventListener('click', function (event) {
    dropdownText.textContent = event.target.textContent;
    dropdownList.classList.remove('show');
    dropdownItems.forEach(item => {
        item.classList.remove('active')
    })
});

const currentDate = new Date();
const year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;

dateInput.value = `${year}-${month}-${day}`;

