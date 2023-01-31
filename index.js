const logoId = document.querySelector('#logo');
const wrapId = document.querySelector('#wrap');
const rightNavebarId = document.querySelector('#right-navbar');
const portfolioId = document.querySelector('#portfolioicon');
const aboutId = document.querySelector('#abouticon');
const contactId = document.querySelector('#contacticon');

wrapId.addEventListener('click', () => {
  wrapId.classList.toggle('change-wrap');
  logoId.classList.toggle('change-leftnavbar-logo');
  rightNavebarId.classList.toggle('change-rightnavbar');
});
portfolioId.addEventListener('click', () => {
  wrapId.classList.remove('change-wrap');
  logoId.classList.remove('change-leftnavbar-logo');
  rightNavebarId.classList.remove('change-rightnavbar');
});
aboutId.addEventListener('click', () => {
  wrapId.classList.remove('change-wrap');
  logoId.classList.remove('change-leftnavbar-logo');
  rightNavebarId.classList.remove('change-rightnavbar');
});
contactId.addEventListener('click', () => {
  wrapId.classList.remove('change-wrap');
  logoId.classList.remove('change-leftnavbar-logo');
  rightNavebarId.classList.remove('change-rightnavbar');
});