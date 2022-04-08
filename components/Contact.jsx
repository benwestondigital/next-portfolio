import { Element } from 'react-scroll';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from './Spinner';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('Submit');
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async e => {
    setIsSubmitting(true);
    e.preventDefault();
    const sendEmail = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_USER_ID
    );
    console.log(sendEmail.text);
    setContactDetails({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitting(false);
    setButtonText('Submitted!');
  };

  return (
    <Element id='contact' name='contact'>
      <div>
        <div className='my-32 flex h-auto w-full flex-col items-center justify-center'>
          <h2 className='text-center text-5xl font-bold text-indigo-900 sm:text-6xl'>
            Contact Me
          </h2>
          <p className='prose mx-2 mt-6 flex-wrap text-center font-normal md:text-left'>
            Have an interesting job opportunity for me? Get in touch:
          </p>
          <form
            ref={form}
            onSubmit={onSubmit}
            className='my-3 flex w-4/5 flex-col justify-center text-center md:w-1/2 lg:w-1/2'
          >
            <div className='flex flex-1'>
              <label htmlFor='name' />
              <input
                required
                value={contactDetails.name}
                onChange={handleChange}
                type='text'
                name='name'
                id='name'
                autoComplete='name'
                placeholder='Your Name'
                className='mt-5 mr-2 h-10 w-full rounded border-2 border-indigo-900 py-1 pl-2 text-xl text-blue-800 placeholder:italic focus:border-blue-600 focus:outline-none'
              />
              <label htmlFor='email' />
              <input
                required
                value={contactDetails.email}
                onChange={handleChange}
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                placeholder='Your Email'
                className='mt-5 h-10 w-full rounded border-2 border-indigo-900 py-1 pl-2 text-xl text-blue-800 placeholder:italic focus:border-blue-600 focus:outline-none'
              />
            </div>
            <label htmlFor='message' />
            <textarea
              required
              value={contactDetails.message}
              onChange={handleChange}
              type='text'
              name='message'
              id='message'
              placeholder='Your Message'
              className='mt-5 h-32 w-full rounded border-2 border-indigo-900 py-1 pl-2 text-xl text-blue-800 placeholder:italic focus:border-blue-600 focus:outline-none'
            />
            <button className='mt-5 h-10 w-1/2 self-center rounded bg-indigo-900 text-xl text-white hover:bg-black'>
              {isSubmitting ? <Spinner /> : buttonText}
            </button>
            {buttonText === 'Submitted!' && <p className='prose pt-6'>Thanks for your message! I will be in touch shortly.</p>}
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
