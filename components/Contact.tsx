import { Element } from 'react-scroll';
import { Spinner } from './Spinner';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import { useContactForm } from '@/hooks/useContactForm';

export const Contact = () => {
  const {
    form,
    isLoading,
    isSubmitted,
    isError,
    contactDetails,
    handleChange,
    onSubmit,
  } = useContactForm();

  const buttonText = isSubmitted ? 'Submitted!' : 'Submit';

  return (
    <Element id="contact" name="contact" className="scroll-mt-8">
      <div className="overflow-hidden">
        <div className="my-24 flex h-auto w-full flex-col items-center justify-center">
          <h2 className="text-center text-5xl font-bold text-indigo-900 dark:text-indigo-500 sm:text-6xl">
            Contact Me
          </h2>
          <p className="prose mx-2 mt-6 flex-wrap text-center font-normal dark:prose-invert md:text-left">
            Have an interesting job opportunity for me? Get in touch:
          </p>
          <form
            ref={form}
            onSubmit={(e) => onSubmit(e)}
            className="my-3 flex w-4/5 flex-col justify-center text-center md:w-1/2 lg:w-1/2"
          >
            <div className="flex flex-1">
              <label htmlFor="name" />
              <input
                required
                value={contactDetails.name}
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Your Name"
                className="mt-5 mr-2 h-10 w-full rounded border-2 border-indigo-900 py-1 pl-2 text-xl text-blue-800 placeholder:italic focus:border-blue-600 focus:outline-none dark:border-indigo-500 dark:text-white dark:focus:border-blue-300"
              />
              <label htmlFor="email" />
              <input
                required
                value={contactDetails.email}
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your Email"
                className="mt-5 h-10 w-full rounded border-2 border-indigo-900 py-1 pl-2 text-xl text-blue-800 placeholder:italic focus:border-blue-600 focus:outline-none dark:border-indigo-500 dark:text-white dark:focus:border-blue-300"
              />
            </div>
            <label htmlFor="message" />
            <textarea
              required
              value={contactDetails.message}
              onChange={(e) => handleChange(e)}
              name="message"
              id="message"
              placeholder="Your Message"
              className="mt-5 h-32 w-full rounded border-2 border-indigo-900 py-1 pl-2 text-xl text-blue-800 placeholder:italic focus:border-blue-600 focus:outline-none dark:border-indigo-500 dark:text-white dark:focus:border-blue-300"
            />
            <div className="flex flex-col items-center justify-center">
              <button
                disabled={isSubmitted}
                className="group relative mt-5 inline-flex w-max items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-indigo-900 transition-all duration-300 ease-in-out hover:pl-10 hover:pr-6 disabled:cursor-not-allowed disabled:opacity-50 dark:text-indigo-500"
              >
                <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-900 transition-all duration-300 ease-in-out group-hover:h-full dark:bg-indigo-500"></span>
                <span className="duration-400 absolute right-0 pr-4 ease-out group-hover:translate-x-12">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="duration-400 absolute left-0 -translate-x-12 pl-2.5 ease-out group-hover:translate-x-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="duration-400 relative w-full text-center transition-colors ease-in-out group-hover:text-white">
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Spinner />
                      <p>Submitting...</p>
                    </span>
                  ) : (
                    buttonText
                  )}
                </span>
              </button>
              {isSubmitted && (
                <ConfettiExplosion
                  force={0.4}
                  floorHeight={250}
                  floorWidth={500}
                />
              )}
            </div>
            {isSubmitted && (
              <p className="prose pt-6 dark:prose-invert">
                Thanks for your message! I will be in touch shortly.
              </p>
            )}
            {isError && (
              <p className="prose pt-6 dark:prose-invert">
                Sorry, this message could not be sent. Please try again later or
                contact me through LinkedIn.
              </p>
            )}
          </form>
        </div>
      </div>
    </Element>
  );
};
