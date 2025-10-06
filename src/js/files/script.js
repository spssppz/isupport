import { isMobile } from "./functions.js";
import { flsModules } from "./modules.js";

function handleVideoPlay(btn) {
	const wrapper = btn.closest('.slide-video__iframe')
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
	const videoBtnPlay = e.target.closest('.slide-video__play')

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
