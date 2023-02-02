/* eslint-disable no-plusplus */
const logoId = document.querySelector('#logo');
const wrapId = document.querySelector('#wrap');
const rightNavebarId = document.querySelector('#right-navbar');

wrapId.addEventListener('click', () => {
  wrapId.classList.toggle('change-wrap');
  logoId.classList.toggle('change-leftnavbar-logo');
  rightNavebarId.classList.toggle('change-rightnavbar');
});

const sectionsArray = ['portfolioId', 'aboutId', 'contactId'];
for (let i = 0; i < sectionsArray.length; i++) {
  sectionsArray[i].addEventListener('click', () => {
    wrapId.classList.remove('change-wrap');
    logoId.classList.remove('change-leftnavbar-logo');
    rightNavebarId.classList.remove('change-rightnavbar');
  });
}
