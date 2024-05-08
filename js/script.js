document.addEventListener('DOMContentLoaded', function () {
	const headerButton = document.querySelector('.header__button')
	const header = document.querySelector('.header')

	headerButton.addEventListener('click', function () {
		header.classList.toggle('active-header')
	})
})



function toggleStatus(element) {
	if (element.textContent === 'active') {
		element.textContent = 'deactive'
		element.classList.remove('active')
		element.classList.add('deactive')
	} else {
		element.textContent = 'active'
		element.classList.remove('deactive')
		element.classList.add('active')
	}
}


