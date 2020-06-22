'use strict';

const header = () => {
    const burgerMenu = document.querySelector('.header__burgerMenu'); //div

    const burgerMenuActive = () => {
        const headerListBlock = document.querySelector('.header__listBlock'); //div
        const headerList = document.querySelector('.header__list'); //ul
        if (headerListBlock.classList.contains('burgerNot-active')) {
            headerListBlock.classList.remove('burgerNot-active');
            headerListBlock.classList.add('burgerActive');
            headerList.style.display = 'block';
        } else if (headerListBlock.classList.contains('burgerActive')) {
            headerListBlock.classList.remove('burgerActive');
            headerListBlock.classList.add('burgerNot-active');
            headerList.style.display = 'none';
        }
    }

    burgerMenu.addEventListener('click', burgerMenuActive);
}

export default header;