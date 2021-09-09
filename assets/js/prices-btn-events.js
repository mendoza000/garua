const btnPlanBasic = document.querySelector('#btnPlanBasic');
const btnPlanClassic = document.querySelector('#btnPlanClassic');
const btnPlanUltra = document.querySelector('#btnPlanUltra');

import { writePlanBasic, 
		writePlanClassic, 
		writePlanUltra } from './writePlans'

export const pricesBtnEvents = () =>{

	btnPlanBasic.addEventListener('click', (e) => {
		
		btnPlanBasic.classList.add('btnPlanActive')
		btnPlanClassic.classList.remove('btnPlanActive')
		btnPlanUltra.classList.remove('btnPlanActive')

		writePlanBasic()

	});

	btnPlanClassic.addEventListener('click', (e) => {
		
		btnPlanBasic.classList.remove('btnPlanActive')
		btnPlanClassic.classList.add('btnPlanActive')
		btnPlanUltra.classList.remove('btnPlanActive')

		writePlanClassic()

	});

	btnPlanUltra.addEventListener('click', (e) => {
		
		btnPlanBasic.classList.remove('btnPlanActive')
		btnPlanClassic.classList.remove('btnPlanActive')
		btnPlanUltra.classList.add('btnPlanActive')

		writePlanUltra()

	});



}