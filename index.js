const burgerIcon=document.querySelector('#burger');
const navbarMenu=document.querySelector('#navbar-menu');

burgerIcon.addEventListener('click',()=>{
    navbarMenu.classList.toggle('is-active');
});