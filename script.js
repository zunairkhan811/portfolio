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
const downloadResume = document.querySelector('#downloadResume')

downloadResume.addEventListener('click', ()=>{
  let link = document.createElement('a');
  link.href = './zunairResume.pdf';
  link.download = 'zunairResume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
})

wrapId.addEventListener('click', () => {
  wrapId.classList.toggle('change-wrap');
  logoId.classList.toggle('change-leftnavbar-logo');
  rightNavebarId.classList.toggle('change-rightnavbar');
});

const popupArray = [
  {
    id: 'card1',
    Name: 'React Stocks Project',
    description: 'In this Project, Stocks Data is presented using Stocks API, and the details of every stock are shown when the user clicks on the specific stock, and the project is completed using React-Redux.',
    featureimage: './images/react-stocks-screenshot.png',
    technologies: ['CSS', 'React', 'Redux'],
    linktoliveversion: 'https://zunairkhan811.github.io/react-stocks-project/',
    linktosource: 'https://github.com/zunairkhan811/react-stocks-project.git',
  },
  {
    id: 'card2',
    Name: 'React BookStore Project',
    description: 'This project has been completed through React-Redux. In this project users can add and delete Books and Books are stored and deleted through API. BookList and Category Section are made. In the Category section only categories are shown when the user clicks on a specific type then only books of that category are shown.',
    featureimage: './images/reactbookscreenshot.png',
    technologies: ['CSS', 'React', 'Redux'],
    linktoliveversion: 'https://zunairkhan811.github.io/react-book-store/',
    linktosource: 'https://github.com/zunairkhan811/react-book-store.git',
  },
  {
    id: 'card3',
    Name: 'React Space Project',
    description: '[React-Space-Project] is a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. The project consumes real live data from the SpaceX API.',
    featureimage: './images/reactspaceprojectscreenshot.png',
    technologies: ['CSS', 'React', 'Redux'],
    linktoliveversion: 'https://zunairkhan811.github.io/react-space-project/',
    linktosource: 'https://github.com/zunairkhan811/react-space-project.git',
  },
  {
    id: 'card4',
    Name: 'Shows Project',
    description: 'Hello , This is a AZ-Shows Javascript Project. [AZ-Shows] is a Pair Programming Project in which two APIs has been used where one API has been used for fetching data like pictures, ratings and names of shows and second API has been used for storing and showing likes and comments.',
    featureimage: './images/javascriptproject.png',
    technologies: ['html', 'CSS', 'Javascript'],
    linktoliveversion: 'https://abbassarwar.github.io/Shows/dist/',
    linktosource: 'https://github.com/zunairkhan811/Shows-Javascript-project.git',
  },
  {
    id: 'card5',
    Name: 'Math Magician',
    description: 'This project is a basic calculator Responsive app that allows users to perform simple calculations as well as quotes shown using the API.',
    featureimage: './images/calculatorscreenshot.png',
    technologies: ['React', 'CSS', 'API'],
    linktoliveversion: 'https://zunairkhan811.github.io/math-magicians/',
    linktosource: 'https://github.com/zunairkhan811/math-magicians.git',
  },
  {
    id: 'card6',
    Name: 'Todo List Javascript',
    description: 'Hi! In this project user can add and remove his daily tasks as well as can edit and upon completion can delete it.',
    featureimage: './images/todoscreenshot.png',
    technologies: ['html', 'CSS', 'Javacript'],
    linktoliveversion: 'https://zunairkhan811.github.io/To-do-list/dist/',
    linktosource: 'https://github.com/zunairkhan811/To-do-list.git',
  }, {
    id: 'card7',
    Name: 'Webly Education Project',
    description: 'Hi! This is the project made for Education purpose by connecting tutors and students around the world to get education remotely.',
    featureimage: './images/webdevelopmentprojectscreenshot.png',
    technologies: ['HTML-CSS', 'Bootstrap', 'Javascript'],
    linktoliveversion: '#',
    linktosource: 'https://github.com/zunairkhan811/Web-development-course-Project.git',
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
