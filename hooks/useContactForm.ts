import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ContactDetails } from '@/types/ContactDetails';

export const useContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsError(false);
    setIsLoading(true);
    e.preventDefault();
    try {
      if (!form.current) return;
      const sendEmail = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
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
    } catch (err) {
      console.log(err, 'err');
      setIsError(true);
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    isSubmitted,
    isError,
    contactDetails,
    handleChange,
    onSubmit,
  };
};
