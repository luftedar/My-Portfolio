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

let projectsArr = [
    {
        name: "Keeping track of hundreds of components",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        mobileFeaturedImage: "img/MobilePopup.jpg",
        desktopFeaturedImage: "img/DesktopPopup.jpg",
        mobileTechnologies: ["Ruby on Rails", "CSS", "JavaScript"],
        desktopTechnologies: ["Codekit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
        linkToLive: "#",
        linkToSource: "#"
    },
    {
        name: "Keeping track of hundreds of components",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        mobileFeaturedImage: "img/MobilePopup.jpg",
        desktopFeaturedImage: "img/DesktopPopup.jpg",
        mobileTechnologies: ["Ruby on Rails", "CSS", "JavaScript"],
        desktopTechnologies: ["Codekit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
        linkToLive: "#",
        linkToSource: "#"
    },
    {
        name: "Keeping track of hundreds of components",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        mobileFeaturedImage: "img/MobilePopup.jpg",
        desktopFeaturedImage: "img/DesktopPopup.jpg",
        mobileTechnologies: ["Ruby on Rails", "CSS", "JavaScript"],
        desktopTechnologies: ["Codekit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
        linkToLive: "#",
        linkToSource: "#"
    },
    {
        name: "Keeping track of hundreds of components",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        mobileFeaturedImage: "img/MobilePopup.jpg",
        desktopFeaturedImage: "img/DesktopPopup.jpg",
        mobileTechnologies: ["Ruby on Rails", "CSS", "JavaScript"],
        desktopTechnologies: ["Codekit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
        linkToLive: "#",
        linkToSource: "#"
    },
    {
        name: "Keeping track of hundreds of components",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        mobileFeaturedImage: "img/MobilePopup.jpg",
        desktopFeaturedImage: "img/DesktopPopup.jpg",
        mobileTechnologies: ["Ruby on Rails", "CSS", "JavaScript"],
        desktopTechnologies: ["Codekit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
        linkToLive: "#",
        linkToSource: "#"
    },
    {
        name: "Keeping track of hundreds of components",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        mobileFeaturedImage: "img/MobilePopup.jpg",
        desktopFeaturedImage: "img/DesktopPopup.jpg",
        mobileTechnologies: ["Ruby on Rails", "CSS", "JavaScript"],
        desktopTechnologies: ["Codekit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
        linkToLive: "#",
        linkToSource: "#"
    },
]

const projectsDetailsBtns = document.querySelectorAll(".card-button");

for (let i = 0; i < projectsDetailsBtns.length; i += 1) {
    projectsDetailsBtns[i].addEventListener("click", ()=>{
        if(screen.width < 992)
        {
            let mobileProjectPopupWindow = document.querySelector("#mobile-popup-container");
            let mobileProjectPopupWindowImage = document.querySelector("#mobile-popup-container img");
            let mobileProjectPopupWindowName = document.querySelector("#mobile-popup-container h2");
            let mobileProjectPopupWindowTechnologies = document.querySelector("#mobile-popup-container .card-list.d-flex");
            let mobileProjectPopupWindowDescription = document.querySelector("#mobile-popup-container p");
            let mobileProjectPopupWindowSeeLive = document.querySelector("#mobile-popup-container #see-live");
            let mobileProjectPopupWindowSeeSource = document.querySelector("#mobile-popup-container #see-source");

            mobileProjectPopupWindowImage.src = projectsArr[i].mobileFeaturedImage;
            mobileProjectPopupWindowName.textContent = projectsArr[i].name;
            mobileProjectPopupWindowTechnologies.innerHTML = '';
            for (let j = 0; j<projectsArr[i].mobileTechnologies.length; j += 1)
            {
                let technology =  document.createElement('li');
                technology.textContent = projectsArr[i].mobileTechnologies[j];
                mobileProjectPopupWindowTechnologies.appendChild(technology);
            }
            mobileProjectPopupWindowDescription.textContent = projectsArr[i].description;
            mobileProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
            mobileProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
            mobileProjectPopupWindow.classList.remove('display-none');
        }
        else 
        {
            let desktopProjectPopupWindow = document.querySelector("#desktop-popup-container");
            let desktopProjectPopupWindowImage = document.querySelector("#desktop-popup-container img");
            let desktopProjectPopupWindowName = document.querySelector("#desktop-popup-container h2");
            let desktopProjectPopupWindowTechnologies = document.querySelector("#desktop-popup-container .card-list.d-flex");
            let desktopProjectPopupWindowDescription = document.querySelector("#desktop-popup-container p");
            let desktopProjectPopupWindowSeeLive = document.querySelector("#desktop-popup-container #see-live");
            let desktopProjectPopupWindowSeeSource = document.querySelector("#desktop-popup-container #see-source");
            let desktopProjectPopupWindowCloseBtn = document.querySelector("#desktop-popup-container .desktop-popup-close-button");

            desktopProjectPopupWindowImage.src = projectsArr[i].desktopFeaturedImage;
            desktopProjectPopupWindowName.textContent = projectsArr[i].name;
            desktopProjectPopupWindowTechnologies.innerHTML = '';
            for (let j = 0; j<projectsArr[i].desktopTechnologies.length; j += 1){
                let technology =  document.createElement('li');
                technology.textContent = projectsArr[i].desktopTechnologies[j];
                technology.style.cssText += 'list-style: none;background: #ebf0ee;border-radius: 4px;letter-spacing: 0.03rem;padding: 0.5rem 0.7rem;font-size: 0.65rem;font-weight: 600;margin: 0 0.3rem;color: #3a4a42;'
                desktopProjectPopupWindowTechnologies.appendChild(technology);
            }

            desktopProjectPopupWindowDescription.textContent = projectsArr[i].description;
            desktopProjectPopupWindowDescription.style.cssText = "font-weight: 400;line-height: 30px;color: #344563;"
            desktopProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
            desktopProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
            desktopProjectPopupWindow.classList.remove('display-none');
            desktopProjectPopupWindowCloseBtn.addEventListener("click", () => {
                desktopProjectPopupWindow.classList.add('display-none');
            });
        }
    });
}