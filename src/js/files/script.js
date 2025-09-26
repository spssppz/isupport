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
})