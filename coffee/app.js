const menu = document.querySelector('.nav-menu')
const  burger = document.querySelector('.burger')



const toggleMenu = () => {
    menu.classList.toggle("show");
}


burger.addEventListener('click', toggleMenu)