// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})

	// Close the menu when a menu item is clicked
	const menuItems = menu.querySelectorAll('a')
	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		})
	})

	// Breakpoint for navbar
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}

burgerMenu()


document.addEventListener('DOMContentLoaded', function () {
	var title = document.querySelector('.siesta__title')
	title.classList.add('show')
})

// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 


function openMap() {
	window.open('https://maps.app.goo.gl/8uJyi5ZTwzuCJ7y97', '_blank')
}




