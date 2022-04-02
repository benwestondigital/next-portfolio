import { Element } from 'react-scroll';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    const sendEmail = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_USER_ID
    );
    console.log(sendEmail.text);
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
          {/* TODO: build out this form to include name, email, bigger text area */}
          <form
            ref={form}
            onSubmit={onSubmit}
            className='flex flex-col justify-center text-center md:w-1/2 w-full my-3'
          >
            <div className='flex'>
              <label htmlFor="name"/>
              <input
                required
                type='text'
                name='name'
                id='name'
                autoComplete='name'
                placeholder='Your Name'
                className='mt-5 py-1 pl-2 w-full rounded text-blue-800 text-xl border-2 border-indigo-900 h-10'
              />
              <label htmlFor="email"/>
              <input
                required
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                placeholder='Your Email'
                className='mt-5 py-1 pl-2 w-full rounded text-blue-800 text-xl border-2 border-indigo-900 h-10'
              />
            </div>
            <label htmlFor="message"/>
            <textarea
              required
              type='text'
              name='message'
              id='message'
              autoComplete='Your message'
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
