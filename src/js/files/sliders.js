/* Документация слайдера: https://swiperjs.com/ */

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, EffectFade, Lazy, Manipulation
*/

function initSliders() {
	if (document.querySelector('.swiper')) {
		new Swiper('.swiper', {
			modules: [Navigation],
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//loop: true,

			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },

			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },

			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 0,
			// 		autoHeight: true,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	992: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 20,
			// 	},
			// 	1268: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 30,
			// 	},
			// },

			// on: {}
		})
	}
}

window.addEventListener("load", () => initSliders())