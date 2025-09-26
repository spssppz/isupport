/* Документация слайдера: https://swiperjs.com/ */

import Swiper from 'swiper';
import { Navigation, Autoplay, FreeMode, Pagination } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, EffectFade, Lazy, Manipulation
*/
// document.querySelectorAll('.gallery__slide').forEach(slide => {
// 	const img = slide.querySelector('img')
// 	img.addEventListener('load', () => {
// 		const aspect = img.naturalWidth / img.naturalHeight
// 		const height = slide.offsetHeight || 360 // желаемая высота слайда
// 		slide.style.width = `${height * aspect}px`
// 	})
// })

function initSliders() {
	if (document.querySelector('.hero__slider')) {
		new Swiper('.hero__slider', {
			modules: [Pagination],
			speed: 600,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.hero__pagination',
				clickable: true,
			},

		})
	}
	if (document.querySelector('.device-picker__slider')) {
		new Swiper('.device-picker__slider', {
			modules: [Navigation],
			speed: 500,
			navigation: {
				prevEl: '.device-picker__slider-btn_prev',
				nextEl: '.device-picker__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					spaceBetween: 0,
					loop: true,
				},
				768: {
					slidesPerView: 'auto',
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},

		})
	}
	if (document.querySelector('.services__slider')) {
		new Swiper('.services__slider', {
			modules: [Navigation],
			speed: 500,
			navigation: {
				prevEl: '.services__slider-btn_prev',
				nextEl: '.services__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 'auto',
					spaceBetween: 0,
					loop: true,
				},
				768: {
					slidesPerView: 'auto',
					spaceBetween: 0,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},

		})
	}
	if (document.querySelector('.gallery__slider')) {
		new Swiper('.gallery__slider', {
			modules: [Navigation],
			speed: 500,
			slidesPerView: 'auto',
			navigation: {
				prevEl: '.gallery__slider-btn_prev',
				nextEl: '.gallery__slider-btn_next',
			},
		})
	}
	if (document.querySelector('.team__slider')) {
		new Swiper('.team__slider', {
			modules: [Navigation],
			speed: 500,
			navigation: {
				prevEl: '.team__slider-btn_prev',
				nextEl: '.team__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					loop: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 16,
					loop: true,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
			},

		})
	}
	if (document.querySelector('.partners__slider')) {
		new Swiper('.partners__slider', {
			modules: [Autoplay, FreeMode],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 3000,
			allowTouchMove: false,
			simulateTouch: false,
			loop: true,
			freeMode: {
				enabled: true,
				momentum: false,
			},
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
		})
	}
	if (document.querySelector('.videos__slider')) {
		new Swiper('.videos__slider', {
			modules: [Navigation],
			speed: 500,
			navigation: {
				prevEl: '.videos__slider-btn_prev',
				nextEl: '.videos__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					loop: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

		})
	}
	if (document.querySelector('.blog__slider')) {
		new Swiper('.blog__slider', {
			modules: [Navigation],
			speed: 500,
			navigation: {
				prevEl: '.blog__slider-btn_prev',
				nextEl: '.blog__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 16,
					loop: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			},

		})
	}
}

window.addEventListener("load", () => initSliders())