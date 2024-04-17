import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '' && document.getElementById('text').value !== '') {
            emailjs
                .sendForm('service_gtssbkg', 'template_rdt2k7c', form.current, {
                    publicKey: 'LSDT0o-MnV4WWn46U',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        window.location.reload(true)
                    },
                    (error) => {
                        console.log('FAILED..', error.text);
                    },
                );
        }
        else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className='flex items-center justify-center w-full pb-10'>
            <form ref={form} className='flex flex-col' onSubmit={sendEmail}>
                <label>Name</label>
                <input className='px-3 py-2' type="text" name="user_name" id='name' />
                <label>Email</label>
                <input className='px-3 py-2' type="email" name="user_email" id='email' />
                <label>Message</label>
                <textarea className='px-3 py-2 border border-black rounded-lg outline-none' name="message" id='text' />
                <input className='py-2 mt-10 text-white duration-300 bg-blue-400 border-0 cursor-pointer hover:bg-blue-500' type="submit" value="Send" />
            </form>
        </div>
    );
};  