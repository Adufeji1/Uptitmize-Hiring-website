const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get form values
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const phone = document.querySelector('#phone').value;
	const city = document.querySelector('#city').value;
	const education = document.querySelector('#education').value;
	const experience = document.querySelector('#experience').value;

	
});
