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
        <div className='flex flex-col items-center justify-center w-full h-auto my-40'>
          <h2 className='text-6xl font-bold text-center text-indigo-900'>
            Contact Me
          </h2>
          <p className='flex-wrap mx-2 mt-6 font-normal text-center md:text-left font'>
            Have an interesting job opportunity for me? Get in touch:
          </p>
          <form
            ref={form}
            onSubmit={onSubmit}
            className='flex flex-col justify-center w-4/5 lg:w-1/2 my-3 text-center md:w-1/2'
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
                className='placeholder:italic w-full h-10 py-1 pl-2 mt-5 mr-2 text-xl text-blue-800 border-2 border-indigo-900 rounded focus:outline-none focus:border-blue-600'
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
                className='placeholder:italic w-full h-10 py-1 pl-2 mt-5 text-xl text-blue-800 border-2 border-indigo-900 rounded focus:outline-none focus:border-blue-600'
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
              className='placeholder:italic w-full h-32 py-1 pl-2 mt-5 text-xl text-blue-800 border-2 border-indigo-900 rounded focus:outline-none focus:border-blue-600'
            />
            <button className='self-center w-1/2 h-10 mt-5 text-xl text-white bg-indigo-900 rounded hover:bg-black'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
