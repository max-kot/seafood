$(function () {
	$('.first-slider, .slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: true,
	})
})

/*---Menu---*/
const menuBtn = document.querySelector('.burger-btn');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu__link')

menuBtn.addEventListener('click', function () {
	body.classList.toggle('no-scroll');
	menuList.classList.toggle('active');
	menuBtn.classList.toggle('active-btn');

})
menuLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		menuList.classList.remove('active');
		body.classList.remove('no-scroll');
		menuBtn.classList.remove('active-btn');
	})
})