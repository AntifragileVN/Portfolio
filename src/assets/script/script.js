const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', function (e) {
		navMenu.classList.add('show-menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', function (e) {
		navMenu.classList.remove('show-menu');
	});
}

const navLinks = document.querySelectorAll('.nav__item');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}

navLinks.forEach((link) => link.addEventListener('click', linkAction));

// change to night mode

const navMode = document.getElementById('nav-mode');
const store = document.querySelector(':root');
let isDarkMode = false;

navMode.addEventListener('click', changeColorMode);

function changeColorMode() {
	isDarkMode = !isDarkMode;

	if (isDarkMode) {
		store.style.setProperty('--background-color', '#000');
		store.style.setProperty('--font-color', '#fff');
		return;
	}
	store.style.setProperty('--background-color', '#fff');
	store.style.setProperty('--font-color', '#000');
	return;
}
