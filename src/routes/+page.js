// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');

window.addEventListener('load', () => {
	const TL = gsap.timeline({ paused: true });
	TL.staggerFrom(titreSpans, 1, { top: -50, opacity: 0, ease: 'power2.out' }, 0.3);
	TL.staggerFrom(btns, 1, { opacity: 0, ease: 'power2.out' }, 0.3, '-=1');
	TL.play();
});
