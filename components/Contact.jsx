import { Element } from 'react-scroll';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
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
  };

  return (
    <Element id='contact' name='contact'>
      <div>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
          <h2 className='text-indigo-900 text-6xl font-bold text-center'>
            Contact Me
          </h2>
          <p className='text-center md:text-left font-normal font mx-2 mt-6 flex-wrap'>
            Have an interesting job opportunity for me? Get in touch:
          </p>
          <form
            ref={form}
            onSubmit={onSubmit}
            className='flex flex-col justify-center text-center md:w-1/2 w-full my-3'
          >
            <div className='flex'>
              <label htmlFor='name' />
              <input
                required
                value={contactDetails.name}
                onChange={handleChange}
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                className='mt-5 py-1 pl-2 w-full rounded text-blue-800 text-xl border-2 border-indigo-900 h-10'
              />
              <label htmlFor='email' />
              <input
                required
                value={contactDetails.email}
                onChange={handleChange}
                type='email'
                name='email'
                id='email'
                placeholder='Your Email'
                className='mt-5 py-1 pl-2 w-full rounded text-blue-800 text-xl border-2 border-indigo-900 h-10'
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
              className='mt-5 py-1 pl-2 w-full rounded text-blue-800 text-xl border-2 border-indigo-900 h-32'
            />
            <button className='mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded hover:bg-black'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
