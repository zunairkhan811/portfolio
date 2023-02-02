/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
const portfolio = document.querySelector('#portfolio');
const seeprojectbutton4 = document.getElementsByClassName('button-4');
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

for (let i = 0; i < seeprojectbutton4.length; i++) {
  seeprojectbutton4[i].addEventListener('click', () => {
    portfolio.classList.toggle('active');
    navbar.classList.toggle('active');
    headlinesection.classList.toggle('active');
    aboutme.classList.toggle('active');
    contactsection.classList.toggle('active');
    footercontainer.classList.toggle('active');
    popupArray.forEach((items, index) => {
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
            <a href="${items.linktoliveversion}"><button class="pop-up-details-btn">See Live <span><img src="/images/icon-see-live.png" class='icon-see-live-img' alt="iconseeimage"></span></button></a>
          <a href="${items.linktosource}"><button class="pop-up-details-btn">See Source <span><i class="fa-brands fa-github"></i></span></button></a>
          </div>
          
        </div>
      </section>
     </div>`;
     const heading1 = document.querySelector('#pop-up-heading');
     let screenwidth = screen.width;
     if(screenwidth < 768){
       heading1.innerHTML=`${items.Name1}`
     }
      
    })
    
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
}