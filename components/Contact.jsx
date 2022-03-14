import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element id='contact' name='contact'>
      <div>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
          <h2 className='text-indigo-900 text-6xl font-bold text-center'>
            Contact Me
          </h2>
          <p className='text-center md:text-left font-normal font mx-2 mt-6 flex-wrap'>
              Interested in talking about a job opportunity? Please contact me
              on social media or email me here:
            </p>
          {/* TODO: build out this form to include name, email, bigger text area */}
          <form className='flex justify-center text-center md:w-1/2 w-full my-3'>
            <input
              type='text'
              name='email-address'
              id='email-address'
              autoComplete='email'
              placeholder='abc@xzy.com'
              className='mt-5 py-1 pl-2 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-indigo-900 h-10'
            />
            <button className='mt-5 text-xl w-36 h-10 bg-indigo-900 text-white rounded-tr-lg rounded-br-lg hover:bg-black'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
