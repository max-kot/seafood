$('.first-slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="img/first/arrow-prev.svg" alt="Previos"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="img/first/arrow-next.svg" alt="Next"></button>',
	responsive: [
		{
			breakpoint: 769,
			settings: {
				prevArrow: '<button type="button" class="slick-prev"><img src="img/first/arrow-prev-grey.svg" alt="Previos"></button>',
				nextArrow: '<button type="button" class="slick-next"><img src="img/first/arrow-next-grey.svg" alt="Next"></button>',
			}
		},
	],
});

/*---Menu---*/
const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu__link')

menuBtn.addEventListener('click', function () {
	body.classList.toggle('no-scroll');
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');

})
menuLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		menuList.classList.remove('active');
		body.classList.remove('no-scroll');
		menuBtn.classList.remove('active-btn');
	})
})