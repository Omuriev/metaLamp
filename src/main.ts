import './style/style.scss'

let guestsDropDownButton = document.querySelector('.dropdown-field__guests');
let guestsList = document.querySelector('.dropdown-field__select-block');

guestsDropDownButton.addEventListener('click', (e) => {
  e.preventDefault();
  guestsList.classList.toggle('dropdown-field__select-block--hidden');
})