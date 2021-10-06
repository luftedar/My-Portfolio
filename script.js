const humburger = document.querySelector('.humburger-btn');
const menu = document.querySelector('.mobile-menu');

humburger.addEventListener('click', () => {
  menu.classList.remove('display-none');
});

const mobileMenuItems = document.querySelectorAll('#small-nav a');

for (let i = 0; i < mobileMenuItems.length; i += 1) {
  mobileMenuItems[i].addEventListener('click', () => {
    menu.classList.add('display-none');
  });
}

const closeMenu = document.querySelector('#toggle-x');
closeMenu.addEventListener('click', () => {
  menu.classList.add('display-none');
});

const projectsArr = [
  {
    mobileName: 'Keeping track of hundreds of components',
    desktopName: 'Keeping track of hundreds of <br> components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileFeaturedImage: 'img/MobilePopup.jpg',
    desktopFeaturedImage: 'img/DesktopPopup.jpg',
    mobileTechnologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTechnologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLive: 'https://luftedar.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/luftedar/My-Portfolio',
  },
  {
    mobileName: 'Keeping track of hundreds of components',
    desktopName: 'Keeping track of hundreds of <br> components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileFeaturedImage: 'img/MobilePopup.jpg',
    desktopFeaturedImage: 'img/DesktopPopup.jpg',
    mobileTechnologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTechnologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLive: 'https://luftedar.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/luftedar/My-Portfolio',
  },
  {
    mobileName: 'Keeping track of hundreds of components',
    desktopName: 'Keeping track of hundreds of <br> components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileFeaturedImage: 'img/MobilePopup.jpg',
    desktopFeaturedImage: 'img/DesktopPopup.jpg',
    mobileTechnologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTechnologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLive: 'https://luftedar.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/luftedar/My-Portfolio',
  },
  {
    mobileName: 'Keeping track of hundreds of components',
    desktopName: 'Keeping track of hundreds of <br> components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileFeaturedImage: 'img/MobilePopup.jpg',
    desktopFeaturedImage: 'img/DesktopPopup.jpg',
    mobileTechnologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTechnologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLive: 'https://luftedar.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/luftedar/My-Portfolio',
  },
  {
    mobileName: 'Keeping track of hundreds of components',
    desktopName: 'Keeping track of hundreds of <br> components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileFeaturedImage: 'img/MobilePopup.jpg',
    desktopFeaturedImage: 'img/DesktopPopup.jpg',
    mobileTechnologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTechnologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLive: 'https://luftedar.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/luftedar/My-Portfolio',
  },
  {
    mobileName: 'Keeping track of hundreds of components',
    desktopName: 'Keeping track of hundreds of <br> components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileFeaturedImage: 'img/MobilePopup.jpg',
    desktopFeaturedImage: 'img/DesktopPopup.jpg',
    mobileTechnologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTechnologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLive: 'https://luftedar.github.io/My-Portfolio/',
    linkToSource: 'https://github.com/luftedar/My-Portfolio',
  },
];

const projectsDetailsBtns = document.querySelectorAll('.card-button');
const bodyScroll = document.querySelector('body');

for (let i = 0; i < projectsDetailsBtns.length; i += 1) {
  projectsDetailsBtns[i].addEventListener('click', () => {
    bodyScroll.style.overflow = 'hidden';
    if (window.screen.width < 992) {
      const mobileProjectPopupWindow = document.querySelector('#mobile-popup-container');
      const mobileProjectPopupWindowImage = document.querySelector('#mobile-popup-container img');
      const mobileProjectPopupWindowName = document.querySelector('#mobile-popup-container h2');
      const mobileProjectPopupWindowTechnologies = document.querySelector('#mobile-popup-container .card-list.d-flex');
      const mobileProjectPopupWindowDescription = document.querySelector('#mobile-popup-container p');
      const mobileProjectPopupWindowSeeLive = document.querySelector('#mobile-popup-container #see-live');
      const mobileProjectPopupWindowSeeSource = document.querySelector('#mobile-popup-container #see-source');
      const mobileProjectPopupWindowCloseBtn = document.querySelector('#mobile-popup-container .mobile-popup-close-button');

      mobileProjectPopupWindowImage.src = projectsArr[i].mobileFeaturedImage;
      mobileProjectPopupWindowDescription.style.cssText = 'font-weight: 400;line-height: 30px;color: #344563;';
      mobileProjectPopupWindowName.textContent = projectsArr[i].mobileName;
      mobileProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < projectsArr[i].mobileTechnologies.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = projectsArr[i].mobileTechnologies[j];
        technology.style.cssText += 'list-style: none;background: #ebf0ee;border-radius: 4px;letter-spacing: 0.03rem;padding: 0.5rem 0.7rem;font-size: 0.65rem;font-weight: 600;margin: 0 0.5rem 0 0;color: #3a4a42;';
        mobileProjectPopupWindowTechnologies.appendChild(technology);
      }
      mobileProjectPopupWindowDescription.textContent = projectsArr[i].description;
      mobileProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
      mobileProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
      mobileProjectPopupWindow.classList.remove('display-none');
      mobileProjectPopupWindowCloseBtn.addEventListener('click', () => {
        mobileProjectPopupWindow.classList.add('display-none');
        bodyScroll.style.overflow = 'auto';
      });
    } else {
      const desktopProjectPopupWindow = document.querySelector('#desktop-popup-container');
      const desktopProjectPopupWindowImage = document.querySelector('#desktop-popup-container img');
      const desktopProjectPopupWindowName = document.querySelector('#desktop-popup-container h2');
      const desktopProjectPopupWindowTechnologies = document.querySelector('#desktop-popup-container .card-list.d-flex');
      const desktopProjectPopupWindowDescription = document.querySelector('#desktop-popup-container p');
      const desktopProjectPopupWindowSeeLive = document.querySelector('#desktop-popup-container #see-live-desk');
      const desktopProjectPopupWindowSeeSource = document.querySelector('#desktop-popup-container #see-source-desk');
      const desktopProjectPopupWindowCloseBtn = document.querySelector('#desktop-popup-container .desktop-popup-close-button');

      desktopProjectPopupWindowImage.src = projectsArr[i].desktopFeaturedImage;
      desktopProjectPopupWindowName.innerHTML = projectsArr[i].desktopName;
      desktopProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < projectsArr[i].desktopTechnologies.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = projectsArr[i].desktopTechnologies[j];
        technology.style.cssText += 'list-style: none;background: #ebf0ee;border-radius: 4px;letter-spacing: 0.03rem;padding: 0.5rem 0.7rem;font-size: 0.65rem;font-weight: 600;margin: 0 0 0 0.3rem;color: #3a4a42;';
        desktopProjectPopupWindowTechnologies.appendChild(technology);
      }

      desktopProjectPopupWindowDescription.textContent = projectsArr[i].description;
      desktopProjectPopupWindowDescription.style.cssText = 'font-weight: 400;line-height: 30px;color: #344563;';
      desktopProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
      desktopProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
      desktopProjectPopupWindow.classList.remove('display-none');
      desktopProjectPopupWindowCloseBtn.addEventListener('click', () => {
        desktopProjectPopupWindow.classList.add('display-none');
        bodyScroll.style.overflow = 'auto';
      });
    }
  });
}

function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function validateEmail(input, lowercaseMsg) {
	var i=0;
  var character='';
  while (i <= input.value.length){
    character = input.value.charAt(i);
    if (!isNaN(character * 1)){
      if (character != character.toLowerCase()){
        return showError(input, lowercaseMsg);
      }
    }
    i++;
  }
}

const form = document.forms[0];
const email = form.elements['email'];
const EMAIL_LowerCase = "Please enter your email in lowercase";
const error = document.querySelector('.error');

form.addEventListener('submit', (event)=>{
  if(!validateEmail(email,EMAIL_LowerCase)){
    error.innerText = EMAIL_LowerCase;
    event.preventDefault();
  }
});