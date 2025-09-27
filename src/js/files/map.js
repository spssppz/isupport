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

if (document.querySelector('#contacts-map')) {
	window.addEventListener('load', () => {
		setTimeout(() => {
			const mapScript = document.createElement('script')
			mapScript.src = `https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=${apikey}&lang=ru_RU`
			document.querySelector('.wrapper').after(mapScript)

			setTimeout(() => ymaps.ready(initMap), 3000)
		}, 1000)
	})
}
