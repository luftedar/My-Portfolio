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
    mobileName: 'Antalya Drummers Summit',
    desktopName: 'Antalya Drummers <br> Summit',
    description: "This project made for the Microverse's capstone project at the end of the first module. Used Cindy Chin's Creative Common Global Summit 2015 Design. Addition to project requirments I added the JavaScript part and the design of the mobile menu. Please leave issues if you have a suggestion! If you like this project, don't forget to give a star!",
    mobileFeaturedImage: 'img/Project1-mbl.png',
    desktopFeaturedImage: 'img/Project1.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    desktopTechnologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: 'https://luftedar.github.io/capstone-project-1/',
    linkToSource: 'https://github.com/luftedar/capstone-project-1',
  },
  {
    mobileName: 'Rick and Morty Characters',
    desktopName: 'Rick and Morty Characters',
    description: "React capstone project which build with React&Redux, rickandmorty API, CSS",
    mobileFeaturedImage: 'https://raw.githubusercontent.com/luftedar/rickandmorty/development/app_screenshot.png',
    desktopFeaturedImage: 'https://raw.githubusercontent.com/luftedar/rickandmorty/development/app_screenshot.png',
    mobileTechnologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    desktopTechnologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    linkToLive: 'https://rickandmortyandorcun.netlify.app/',
    linkToSource: 'https://github.com/luftedar/rickandmorty',
  },
  {
    mobileName: 'Budget Tracker',
    desktopName: 'Budget Tracker',
    description: "Ruby on Rails capstone project. Used Devise, Cancancan, Capybara, Selenium, RSpec",
    mobileFeaturedImage: 'https://raw.githubusercontent.com/luftedar/budget-app/development/app_screenshot.png',
    desktopFeaturedImage: 'https://raw.githubusercontent.com/luftedar/budget-app/development/app_screenshot.png',
    mobileTechnologies: ['Ruby', 'Ruby on Rails', 'CSS'],
    desktopTechnologies: ['Ruby', 'Ruby on Rails', 'CSS'],
    linkToLive: 'https://thawing-crag-46611.herokuapp.com/',
    linkToSource: 'https://github.com/luftedar/budget-app',
  },
  {
    mobileName: 'Space Travelers',
    desktopName: 'Space Travelers',
    description: "Group project that built by using React&Redux along with TDD, pair-programming.",
    mobileFeaturedImage: 'https://user-images.githubusercontent.com/63560332/146210656-b0870538-fc00-4b0e-89e7-8afa378d3f91.png',
    desktopFeaturedImage: 'https://user-images.githubusercontent.com/63560332/146210656-b0870538-fc00-4b0e-89e7-8afa378d3f91.png',
    mobileTechnologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    desktopTechnologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    linkToLive: 'https://spacetravellers.netlify.app/',
    linkToSource: 'https://github.com/luftedar/space-travelers',
  },
  {
    mobileName: 'Math Magicians',
    desktopName: 'Math Magicians',
    description: "SPA that has calculator built in it. React is used while developing the project",
    mobileFeaturedImage: 'https://raw.githubusercontent.com/luftedar/math-magician/development/app_screenshot.png',
    desktopFeaturedImage: 'https://raw.githubusercontent.com/luftedar/math-magician/development/app_screenshot.png',
    mobileTechnologies: ['React', 'CSS'],
    desktopTechnologies: ['React', 'CSS'],
    linkToLive: 'https://luftedar.github.io/math-magician/',
    linkToSource: 'https://github.com/luftedar/math-magician',
  },
  {
    mobileName: 'TV Shows',
    desktopName: 'TV Shows',
    description: "JavaScript capstone group project that built by using webpack, pair-programming, HTML&CSS, TV Maze API. You can comment and see the TV shows",
    mobileFeaturedImage: 'https://raw.githubusercontent.com/luftedar/Capstone_project_2/master/app_screenshot.png',
    desktopFeaturedImage: 'https://raw.githubusercontent.com/luftedar/Capstone_project_2/master/app_screenshot.png',
    mobileTechnologies: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
    desktopTechnologies: ['JavaScript', 'HTML', 'CSS', 'Webpack'],
    linkToLive: 'https://wes-isaac.github.io/Capstone_project_2/',
    linkToSource: 'https://github.com/luftedar/Capstone_project_2',
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

const email = document.querySelector('#email');
const form = document.querySelector('#form');
const error = document.querySelector('.error');

const caseChecker = (name) => {
  for (let i = 0; i < name.length; i += 1) {
    if (name[i] !== name[i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

form.addEventListener('submit', (e) => {
  if (!caseChecker(email.value)) {
    error.innerHTML = 'Please!<br>Enter your email<br>in lowercase!';
    e.preventDefault();
  }
});

const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const textElement = document.getElementById('gettouch');

if(localStorage.length === 0) {
  populateStorage();
}else {
  setFields();
}

function populateStorage() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('textarea', document.getElementById('gettouch').value);

  setFields();
}

function setFields() {
  let currentNameInput = localStorage.getItem('name');
  let currentEmailInput = localStorage.getItem('email');
  let currentTextArea = localStorage.getItem('textarea');

  nameElement.value = currentNameInput;
  emailElement.value = currentEmailInput;
  textElement.value = currentTextArea;
}

nameElement.onchange = populateStorage;
emailElement.onchange = populateStorage;
textElement.onchange = populateStorage;

function createLocalStorageFormData() {
  let formData = {
    name: nameElement.value,
    email: emailElement.value,
    message: textElement.value,
  }
  let stringFormData = JSON.stringify(formData);
  localStorage.setItem('formDate', stringFormData);
  setFormData();
}

function setFormData() {
  let stringFormData = localStorage.getItem('formDate');
  let formData = JSON.parse(stringFormData);
  nameElement.value = formData.name;
  emailElement.value = formData.email;
  textElement.value = formData.message;
}

if(!localStorage.getItem('formDate')) {
  createLocalStorageFormData();
} else {
  setFormData();
}