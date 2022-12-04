import { useRef } from 'react';
import { ContactIcon } from '../icons/icons';

function Contact() {
	const nameRef = useRef(null);
	const messageRef = useRef(null);

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const name = nameRef.current?.value;
		const message = messageRef.current?.value;

		if (name === '' || message === '') {
			alert('Please fill the form');
		} else {
			let url = 'https://api.whatsapp.com/send?phone=6282387325971&text=';
			const text = `Halo mas Sam, perkenalkan nama saya ${name}, ${message}`;
			const encodedText = encodeURIComponent(text);
			window.open(url + encodedText);
		}
	};

	return (
		<div className="flex flex-col items-center gap-y-5">
			<h1 className="text-secondary mt-5 mb-8 flex items-start justify-start gap-x-2 text-center text-3xl font-bold md:text-4xl">
				<ContactIcon /> Contact
			</h1>

			<form onSubmit={handleSubmitForm} className="flex flex-col gap-y-3">
				<input
					type="text"
					ref={nameRef}
					required={true}
					placeholder="Type your name"
					className="text-primary input-bordered input-primary input w-full max-w-xs text-sm"
				/>

				<textarea
					className="border-primary text-primary textarea w-full max-w-xs border text-sm"
					placeholder="Type your message"
					ref={messageRef}
					required={true}
					maxLength={500}
					rows={5}
				></textarea>

				<button type="submit" className="btn-primary btn mb-12 w-full max-w-xs">
					Kirim Pesan
				</button>
			</form>
		</div>
	);
}

export default Contact;
