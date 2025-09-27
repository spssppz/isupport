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
	// Main page
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
		const gallerySliders = document.querySelectorAll('.gallery__slider')
		gallerySliders.forEach(gallerySlider => {
			new Swiper(gallerySlider, {
				modules: [Navigation],
				speed: 500,
				slidesPerView: 'auto',
				navigation: {
					prevEl: gallerySlider.parentElement.querySelector('.gallery__slider-btn_prev'),
					nextEl: gallerySlider.parentElement.querySelector('.gallery__slider-btn_next'),
				},
			})

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
	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			modules: [Navigation],
			speed: 500,
			navigation: {
				prevEl: '.reviews__slider-btn_prev',
				nextEl: '.reviews__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					loop: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 3,
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
	// Service Page
	if (document.querySelector('.other-services__slider')) {
		new Swiper('.other-services__slider', {
			modules: [Navigation],
			speed: 500,
			spaceBetween: 16,
			navigation: {
				prevEl: '.other-services__slider-btn_prev',
				nextEl: '.other-services__slider-btn_next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					loop: true,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 4,
				},
			},

		})
	}
}

window.addEventListener("load", () => initSliders())