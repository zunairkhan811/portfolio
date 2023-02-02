/* eslint-disable no-restricted-globals */
const portfolio = document.querySelector('#portfolio');
const seeprojectbutton4 = document.getElementsByClassName('button-4');
const navbar = document.querySelector('.nav-bar');
const headlinesection = document.querySelector('.headline-section');
const aboutme = document.querySelector('.about-me');
const contactsection = document.querySelector('.contact-section');
const footercontainer = document.querySelector('.footer-container');
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

const popupArray = [{
  Name: 'Keeping track of hundreds  of components website',
  Name1: 'Multi Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  featureimage: './images/popupimage.png',
  technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  linktoliveversion: '#',
  linktosource: '#',
}];