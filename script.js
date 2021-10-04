const humburger = document.querySelector('.humburger-btn');
const menu = document.querySelector('.mobile-menu');

humburger.addEventListener('click', ()=>{
    menu.classList.remove('display-none');
});

const mobileMenuItems = document.querySelectorAll('#small-nav a');

for (let i = 0; i < mobileMenuItems.length; i += 1)
{
    mobileMenuItems[i].addEventListener('click', ()=>{
        menu.classList.add('display-none');
    });
}

const closeMenu = document.querySelector('#toggle-x');
closeMenu.addEventListener('click', ()=>{
    menu.classList.add('display-none');
});