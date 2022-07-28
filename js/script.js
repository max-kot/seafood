$('.first-slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/first/arrow-prev.svg" alt="Previos"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/first/arrow-next.svg" alt="Next"></button>',
});

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