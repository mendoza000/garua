const $form = document.querySelector('.formulario');
const $name = document.querySelector('.formulario_name');
const $mail = document.querySelector('.formulario_mail');
const $message  = document.querySelector('#formulario_message');
const $sendMail = document.querySelector('.sendMailto');

export const forMailEvent = () => {

	$form.addEventListener('submit', (event) => {
		
		event.preventDefault()
		const name = $name.value
		const mail = $mail.value
		const message = $message.value
		if (name.length === 0 
		    || mail.length === 0 
		    || message.length === 0) {

			return;
		}
		$sendMail.setAttribute('href', `mailto:omarmendoza.alv25@gmail.com?subject=${name} ${mail}&body=${message}`)
		$sendMail.click()
	});
}