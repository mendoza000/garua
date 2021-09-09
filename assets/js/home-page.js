const app = document.querySelector('#app');
const btnMenu = document.querySelector('.btn_menu');
const navMenu = document.querySelector('.app_nav');
import {pricesBtnEvents} from './prices-btn-events'

export const writeHomePage = () => {

	console.log("Hello world");

	/*document.querySelector('#app').innerHTML = `
  		<h1 class="app_title">Garua Token!</h1>
  		
	`*/

	eventsHomePage()


}

const eventsHomePage = () => {

	let view = false

	btnMenu.addEventListener('click', (e) => {
		
		if (!view) {
			navMenu.style.left = "0%"
			btnMenu.innerHTML = `
				<i class="las la-times"></i>
			`
			view = !view
		}else{
			navMenu.style.left = "-100%"
			btnMenu.innerHTML = `
				<i class="las la-bars"></i>
			`
			view = !view
		}

	});

	pricesBtnEvents()

}
