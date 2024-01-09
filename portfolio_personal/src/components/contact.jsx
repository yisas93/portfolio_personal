import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o4q34a5', 'template_1rmeuyl', form.current, 'KeLKw4a3-Mqtcw0do')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      Swal.fire({
        title: "Message sent!",
        text: "Thank you for reaching out. I appreciate your message and will get back to you as soon as possible.",
        icon: "success"
      });

      e.target.reset()
  };

  return (
    <div className='contact-holder container-fluid d-grid row' id='contact' >
        <div className="col-11 col-sm-6 m-auto form-cont">
            <h1 className='title-contact'>Contact me</h1>
    <form ref={form} onSubmit={sendEmail} className='field d-grid form'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className='text-form' name="message" />
      <input type="submit" value="Send" />
    </form>
    <div className="links-contact">
      <a href="https://www.linkedin.com/in/juan-carlos-campos-14a7aa212/">
      <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/yisas93">
      <i class="fa-brands fa-github"></i>
      </a>
      <a href="mailto:juan249325@gmail.com">
        <i class="fa-sharp fa-solid fa-envelope"></i>
      </a>
      <a href="https://api.whatsapp.com/send?phone=50660472692">
      <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>
    </div>
    </div>
  );
};