import { bodyLock, bodyUnlock, isMobile } from "./functions.js";
import { flsModules } from "./modules.js";

function handleVideoPlay(btn) {
	const wrapper = btn.closest('.video')
	if (!wrapper) return

	const src = wrapper.dataset.lazy
	if (!src) return

	const videoSrc = `${src}?autoplay=1&rel=0`

	wrapper.innerHTML = `
    <iframe
      src="${videoSrc}"
      title="YouTube video player"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    ></iframe>
  `
}

document.addEventListener('click', e => {
	const videoBtnPlay = e.target.closest('.video-play')

	if (videoBtnPlay) handleVideoPlay(videoBtnPlay)


	document.querySelectorAll('.custom-sel.open')
		.forEach(sel => sel.classList.remove('open'))
})


const selects = document.querySelectorAll('.custom-sel')

selects.forEach(sel => {
	const btn = sel.querySelector('.custom-sel__btn')
	const inp = sel.querySelector('.custom-sel__input')
	const sub = sel.querySelector('.custom-sel__sub')
	const options = sub.querySelectorAll('button')

	// 1) Открыть/закрыть по клику на кнопку
	btn.addEventListener('click', e => {
		e.stopPropagation()
		sel.classList.toggle('open')
	})

	// 2) Выбор значения
	options.forEach(opt => {
		opt.addEventListener('click', e => {
			e.stopPropagation()

			const value = opt.dataset.value || opt.textContent
			const label = opt.textContent

			// 3) Меняем текст кнопки
			btn.querySelector('span').textContent = label
			// 4) В инпут отправляем data-value
			inp.value = value

			sel.classList.remove('open')
		})
	})
})

if (document.querySelector('.form-validate')) {

	const validateForms = document.querySelectorAll('.form-validate')

	validateForms.forEach(validateForm => {
		const btnForm = validateForm.querySelector('button[type="submit"]')
		if (!btnForm) return

		const reqInputs = validateForm.querySelectorAll('.req, .req-email, .req-checkbox, .req-phone')

		reqInputs.forEach(reqInput => {
			reqInput.addEventListener('focus', () => {
				if (reqInput.classList.contains('error')) {
					reqInput.classList.remove('error')
					reqInput.removeAttribute('aria-invalid')
				}
			})
			reqInput.addEventListener('change', () => {
				if (reqInput.classList.contains('error')) {
					reqInput.classList.remove('error')
					reqInput.removeAttribute('aria-invalid')
				}
			})
		})

		btnForm.addEventListener('click', e => {
			let errors = 0

			// Удаляем старое сообщение, если есть
			const oldErrorMsg = validateForm.nextElementSibling
			if (oldErrorMsg && oldErrorMsg.classList.contains('error-msg')) {
				oldErrorMsg.remove()
			}

			reqInputs.forEach(reqInput => {
				const isEmpty = !reqInput.value
				const isEmail = reqInput.classList.contains('req-email')
				const isCheckbox = reqInput.classList.contains('req-checkbox')
				const isPhone = reqInput.classList.contains('req-phone')

				// Проверка на пустое значение
				if (!isEmail && !isCheckbox && !isPhone && isEmpty) {
					errors++
					reqInput.classList.add('error')
					reqInput.setAttribute('aria-invalid', 'true')
				}

				// Проверка email
				if (isEmail) {
					const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
					if (!reqInput.value || !emailPattern.test(reqInput.value)) {
						errors++
						reqInput.classList.add('error')
						reqInput.setAttribute('aria-invalid', 'true')
					}
				}

				// Проверка телефона (+7(999) 999-99-99)
				if (isPhone) {
					const phonePattern = /^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/
					if (!reqInput.value || !phonePattern.test(reqInput.value)) {
						errors++
						reqInput.classList.add('error')
						reqInput.setAttribute('aria-invalid', 'true')
					}
				}

				// Проверка чекбокса
				if (isCheckbox && !reqInput.checked) {
					errors++
					reqInput.classList.add('error')
					reqInput.setAttribute('aria-invalid', 'true')
				}
			})

			console.log(`errs: ${errors}`)

			if (errors) {
				e.preventDefault()

				const msgText = validateForm.dataset.errorMsg || 'Пожалуйста, заполните обязательные поля'
				const errorDiv = document.createElement('div')
				errorDiv.classList.add('error-msg')
				errorDiv.textContent = msgText
				validateForm.after(errorDiv)
			}
		})
	})
}
const info = document.querySelector('.info')
const btn = document.querySelector('.info__close')

if (!localStorage.getItem('infoClosed')) {
	info.style.display = 'block'
}

btn.addEventListener('click', () => {
	info.style.display = 'none'
	localStorage.setItem('infoClosed', 'true')
})


if (window.innerWidth < 992) {
	const btnContacts = document.querySelector('.menu-contacts-btn')
	const btnContactsClose = document.querySelector('.header-contacts-close')

	// Открытие контактов
	if (btnContacts) {
		btnContacts.addEventListener('click', e => {
			e.preventDefault()

			// Закрываем бургер, если он открыт
			if (document.documentElement.classList.contains('menu-open')) {
				document.documentElement.classList.remove("menu-open")
			}

			// Добавляем класс — только открытие
			document.documentElement.classList.add('header-contacts-show')
			bodyLock(0)
		})
	}

	// Закрытие контактов
	if (btnContactsClose) {
		btnContactsClose.addEventListener('click', e => {
			e.preventDefault()
			document.documentElement.classList.remove('header-contacts-show')
			bodyUnlock(0)
		})
	}
}

const catalogBodyList = document.querySelectorAll('.catalog__body')
catalogBodyList.forEach(catalogBody => {
	const catalogBtns = catalogBody.querySelectorAll('.catalog__btn')

	if (isMobile.any() && catalogBtns.length) {
		if (window.innerWidth >= 768) {
			catalogBtns[0].parentElement.classList.add('sub-catalog-current')

		}
		catalogBtns.forEach(catalogBtn => {
			catalogBtn.addEventListener('click', () => {
				const parent = catalogBtn.parentElement
				const isActive = parent.classList.contains('sub-catalog-current')

				// убираем у всех
				catalogBody.querySelectorAll('.sub-catalog-current').forEach(el => {
					el.classList.remove('sub-catalog-current')
				})

				// если не был активен — активируем
				if (!isActive) parent.classList.add('sub-catalog-current')
			})
		})
	}
})

const catalogBackBtns = document.querySelectorAll('.sub-catalog__back')

catalogBackBtns.forEach(catalogBackBtn => {
	catalogBackBtn.addEventListener('click', () => {
		catalogBackBtn.closest('.sub-catalog-current')?.classList.remove('sub-catalog-current')
	})
})
const tabBtns = document.querySelectorAll('[data-tab-catalog]')
const catalogClose = document.querySelector('.catalog__close')
const catalog = document.querySelector('.catalog')

const header = document.querySelector('.header')

function updateCatalogTop() {
	if (!document.querySelector('.open-catalog')) return
	const scrollY = window.scrollY
	const top = Math.max(header.offsetHeight - scrollY, 0)
	catalog.style.top = top + 'px'
}

window.addEventListener('resize', updateCatalogTop)

tabBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const tab = btn.dataset.tabCatalog
		const target = document.querySelector(`[data-switch-catalog="${tab}"]`)
		const html = document.documentElement
		const isOpen = target.classList.contains('catalog__body_current')
		document.querySelectorAll('.sub-catalog-current').forEach(b => b.classList.remove('sub-catalog-current'))
		if (isOpen) {
			// закрываем
			target.classList.remove('catalog__body_current')
			btn.classList.remove('current-catalog-btn')
			html.classList.remove('open-catalog')
			bodyUnlock(0)
		} else {
			// закрываем все остальные
			document.querySelectorAll('[data-switch-catalog]').forEach(el => el.classList.remove('catalog__body_current'))
			tabBtns.forEach(b => b.classList.remove('current-catalog-btn'))

			// открываем текущий
			updateCatalogTop()

			target.classList.add('catalog__body_current')
			btn.classList.add('current-catalog-btn')
			html.classList.add('open-catalog')
			bodyLock(0)
		}
	})
})

if (catalogClose) {
	catalogClose.addEventListener('click', () => {
		document.documentElement.classList.remove('open-catalog')
		document.querySelectorAll('[data-switch-catalog]').forEach(el => el.classList.remove('catalog__body_current'))
		tabBtns.forEach(b => b.classList.remove('current-catalog-btn'))
		document.querySelector('.sub-catalog-current')?.classList.remove('sub-catalog-current')
		bodyUnlock(0)
	})
}

// клик вне каталога
document.addEventListener('click', e => {
	const ignoreClick = e.target.closest('.catalog') || e.target.hasAttribute('data-tab-catalog') || e.target.closest('.icon-menu')
	if (!ignoreClick && window.innerWidth >= 992) {
		document.documentElement.classList.remove('open-catalog')
		document.querySelectorAll('[data-switch-catalog]').forEach(el => el.classList.remove('catalog__body_current'))
		tabBtns.forEach(b => b.classList.remove('current-catalog-btn'))
		bodyUnlock(0)
	}
})
