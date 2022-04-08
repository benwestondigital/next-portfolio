import { Element } from 'react-scroll';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from './Spinner';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const buttonText = isSubmitted ? 'Submitted!' : 'Submit';

  const handleChange = e => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async e => {
    setIsLoading(true);
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
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <Element id='contact' name='contact'>
      <div className='overflow-hidden'>
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
            <div className='flex flex-col items-center justify-center'>
              <button
                disabled={isSubmitted}
                className='group relative mt-5 inline-flex w-max items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-indigo-900 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 disabled:cursor-not-allowed disabled:opacity-50'
              >
                <span className='absolute bottom-0 left-0 h-1 w-full bg-indigo-900 transition-all duration-150 ease-in-out group-hover:h-full'></span>
                <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
                  <svg
                    className='h-5 w-5 text-green-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
                <span className='absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0'>
                  <svg
                    className='h-5 w-5 text-green-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
                <span className='relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white'>
                  {isLoading ? (
                    <span className='flex items-center gap-2'>
                      <Spinner />
                      <p>Submitting...</p>
                    </span>
                  ) : (
                    buttonText
                  )}
                </span>
              </button>
              {isSubmitted && (
                <ConfettiExplosion force={0.4} floorHeight={250} />
              )}
            </div>
            {isSubmitted && (
              <p className='prose pt-6'>
                Thanks for your message! I will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
