const apikey = '51092280-e018-4241-bc97-180570de25d4'

function initMap() {
	const mapContacts = document.querySelector('#contacts-map')

	if (mapContacts) {
		const lat = parseFloat(mapContacts.dataset.lat) || 55.03
		const lon = parseFloat(mapContacts.dataset.lon) || 82.9141955999
		const coords = [lat, lon]

		const map = new ymaps.Map('contacts-map', {
			center: coords,
			zoom: 14,
			controls: ['zoomControl'],
		})

		const placemark = new ymaps.Placemark(coords, {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/loc.svg',
			iconImageSize: [48, 48],
			iconImageOffset: [-24, -48],
		})
		map.geoObjects.add(placemark)
	}
}

function loadYandexMapScript(callback) {
	if (window.ymaps) {
		callback()
		return
	}

	const script = document.createElement('script')
	script.src = `https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=${apikey}&lang=ru_RU`
	script.async = true
	script.onload = () => ymaps.ready(callback)
	document.body.appendChild(script)
}

document.addEventListener('DOMContentLoaded', () => {
	const mapEl = document.querySelector('#contacts-map')

	if (!mapEl) return

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				loadYandexMapScript(initMap)
				obs.unobserve(entry.target) // чтобы не вызывалось повторно
			}
		})
	}, {
		root: null,
		rootMargin: '0px',
		threshold: 0.1, // запускаем, когда карта хотя бы на 10% видна
	})

	observer.observe(mapEl)
})
