/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
const portfolio = document.querySelector('#portfolio');
const navbar = document.querySelector('.nav-bar');
const headlinesection = document.querySelector('.headline-section');
const aboutme = document.querySelector('.about-me');
const contactsection = document.querySelector('.contact-section');
const footercontainer = document.querySelector('.footer-container');

const logoId = document.querySelector('#logo');
const wrapId = document.querySelector('#wrap');
const rightNavebarId = document.querySelector('#right-navbar');

wrapId.addEventListener('click', () => {
  wrapId.classList.toggle('change-wrap');
  logoId.classList.toggle('change-leftnavbar-logo');
  rightNavebarId.classList.toggle('change-rightnavbar');
});

const popupArray = [
  {
    id: 'card1',
    Name: 'Webly Education Project',
    description: 'Webly Education is a project to provide online software education to the students by connecting various Software Education experts and students from different countries round the world thereby, creating an innovative change in the society and the countribution in the technology advancement.',
    featureimage: './images/webdevelopmentprojectscreenshot.png',
    technologies: ['html', 'CSS', 'Javacript'],
    linktoliveversion: 'https://zunairkhan811.github.io/Web-development-course-Project/',
    linktosource: 'https://github.com/zunairkhan811/Web-development-course-Project.git',
  },
  {
    id: 'card2',
    Name: 'Awesome Books Project',
    description: 'Awesome Books is a project for Book lovers. Bookish people can store the book names and their author in the browser. Add, delete book feature has been added using javascript and thereby storing the collection of books in user browser.',
    featureimage: './images/awesomebook2.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    linktoliveversion: 'https://zunairkhan811.github.io/Awesome-booksES6-using-modules/#',
    linktosource: 'https://github.com/zunairkhan811/Awesome-booksES6-using-modules.git',
  },
  {
    id: 'card3',
    Name: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featureimage: './images/popupimage.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linktoliveversion: '#',
    linktosource: '#',
  },
  {
    id: 'card4',
    Name: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featureimage: './images/popupimage.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linktoliveversion: '#',
    linktosource: '#',
  },
  {
    id: 'card5',
    Name: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featureimage: './images/popupimage.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linktoliveversion: '#',
    linktosource: '#',
  },
  {
    id: 'card6',
    Name: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featureimage: './images/popupimage.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linktoliveversion: '#',
    linktosource: '#',
  }, {
    id: 'card7',
    Name: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featureimage: './images/popupimage.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    linktoliveversion: '#',
    linktosource: '#',
  }];

const card1 = document.querySelector('#card0');
const card2 = document.querySelector('#card1');
const card3 = document.querySelector('#card2');
const card4 = document.querySelector('#card3');
const card5 = document.querySelector('#card4');
const card6 = document.querySelector('#card5');
const card7 = document.querySelector('#card6');

const cardArray = [card1, card2, card3, card4, card5, card6, card7];

// eslint-disable-next-line no-unused-vars
cardArray.forEach((carditems, index) => {
  const items = popupArray[index];
  carditems.addEventListener('click', () => {
    portfolio.classList.toggle('active');
    navbar.classList.toggle('active');
    headlinesection.classList.toggle('active');
    aboutme.classList.toggle('active');
    contactsection.classList.toggle('active');
    footercontainer.classList.toggle('active');
    const container = document.querySelector('.container');
    const section = document.createElement('section');
    container.appendChild(section);
    section.innerHTML = `<div class="pop-up-container">
      <header class="pop-up-header">
        <div class="pop-up-heading">
          <h2 id="pop-up-heading">${items.Name}</h2>
          <button class="close-btn">&times;</button> 
        </div>
        <div class="pop-up-buttons">
          <span class="pop-up-lang-btn">${items.technologies[0]}</span>
          <span class="pop-up-lang-btn">${items.technologies[1]}</span>
          <span class="pop-up-lang-btn">${items.technologies[2]}</span>
        </div>
      </header>
      <section class="pop-up-body">
        <div class="pop-up-image">
          <img src="${items.featureimage}" alt="Projectimg">
        </div>
        <div class="pop-up-details">
          <p>${items.description}</p>
          <div class="pop-up-details-btn-container">
            <a href="${items.linktoliveversion}"><button class="pop-up-details-btn">See Live <span><img src="./images/Icon-see-live.png" class='icon-see-live-img' alt="iconseeimage"></span></button></a>
          <a href="${items.linktosource}"><button class="pop-up-details-btn">See Source <span><i class="fa-brands fa-github"></i></span></button></a>
          </div>
          
        </div>
      </section>
     </div>`;
    const popupcontainer = document.querySelector('.pop-up-container');
    const closebtn = document.querySelector('.close-btn');
    popupcontainer.classList.toggle('pop-up-active');

    closebtn.addEventListener('click', () => {
      const popupcontainer = document.querySelector('.pop-up-container');
      popupcontainer.classList.remove('pop-up-active');
      portfolio.classList.remove('active');
      navbar.classList.remove('active');
      headlinesection.classList.remove('active');
      aboutme.classList.remove('active');
      contactsection.classList.remove('active');
      footercontainer.classList.remove('active');
      const container = document.querySelector('.container');
      container.removeChild(container.lastElementChild);
    });
  });
});

const portfolioId = document.querySelector('#portfolioicon');
const aboutId = document.querySelector('#abouticon');
const contactId = document.querySelector('#contacticon');
const sectionsArray = [portfolioId, aboutId, contactId];
for (let i = 0; i < sectionsArray.length; i++) {
  sectionsArray[i].addEventListener('click', () => {
    wrapId.classList.remove('change-wrap');
    logoId.classList.remove('change-leftnavbar-logo');
    rightNavebarId.classList.remove('change-rightnavbar');
  });
}

function formValidation(e) {
  const email = document.querySelector('#email');

  if (email.value !== email.value.toLowerCase()) {
    document.querySelector('.form-button').style.top = '0rem';
    document.querySelector('.error').innerHTML = '*Email should be in lower case letter!!';
    e.preventDefault();
    e.stopPropagation();
  }
}
const formId = document.forms.form;
formId.addEventListener('submit', formValidation);

const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const textarea1 = document.getElementById('textarea');

let getDataFromLocalStorage = JSON.parse(localStorage.getItem('user-data'));
if (!getDataFromLocalStorage) {
  getDataFromLocalStorage = {
    name: '',
    email: '',
    textareamessage: '',
  };
}

name1.value = getDataFromLocalStorage.name;
email1.value = getDataFromLocalStorage.email;
textarea1.value = getDataFromLocalStorage.textareamessage;

formId.addEventListener('input', () => {
  const formData = {
    name: name1.value,
    email: email1.value,
    textareamessage: textarea1.value,
  };
  localStorage.setItem('user-data', JSON.stringify(formData));
});
