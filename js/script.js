let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeForm = document.querySelector('#close');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

searchIcon.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
});
closeForm.addEventListener ('click', ()=>{
    searchForm.classList.remove('active');
});

var Swiper = new Swiper(".home-slider",{
	spaceBetween: 30,
	centeredSlides: true,
	autoplay:{
		delay: 7500,
		disableOnlnteraction:false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop:true,	

	});
