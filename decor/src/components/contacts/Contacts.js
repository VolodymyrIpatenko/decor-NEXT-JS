import { useState } from 'react';
import Modal from '../modal/Modal.js';
import emailjs from 'emailjs-com';
import validator from 'validator';
import { useInput, useToggle } from '../customHooks/CustomHooks';

import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
  FormWrapper,
} from './Contacts.styled';

const Contacts = () => {
  const [name, setName] = useInput('');
  const [email, setEmailError] = useState('');
  const [message, setMessage] = useInput('');
  const [isModalOpen, setModalOpen] = useToggle(false);

  const values =
    name === '' || email === '' || message === '' || email !== 'Valid Email :)';

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_08bxowc',
        'template_wzku9hr',
        e.target,
        '3SDHZ_wnfkYeO2bfX'
      )
      .then(
        result => {
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <FormWrapper>
        <MyForm onSubmit={sendEmail}>
          <h1>Contact US</h1>
          <LabelText>
            <p>Name</p>
            <Input
              type="text"
              placeholder="Your name"
              onChange={setName}
              name="name"
            />
          </LabelText>
          <LabelText>
            <p>Email</p>
            <Input
              type="email"
              placeholder="Your email"
              onChange={validateEmail}
              name="email"
            />
            <p
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {email}
            </p>
          </LabelText>
          <LabelText>
            <p>Message</p>
            <Textarea
              placeholder="Type your message"
              onChange={setMessage}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={values ? true : false}
            type="submit"
            onClick={() => setModalOpen.toggle()}
          >
            {values ? 'Fill all the fields' : 'Submit'}
          </ButtonSubmit>
          {isModalOpen ? <Modal /> : null}
        </MyForm>
      </FormWrapper>
    </>
  );
};

export default Contacts;
