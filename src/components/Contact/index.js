import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(to bottom, #00ffff 10%, #003399 81%);
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color:rgb(3 3 94);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: rgb(3 3 94);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgb(3 3 94);
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgb(3 24 92) 0px 4px 24px; /* Updated box shadow */
  margin-top: 28px;
  gap: 12px;
`;



const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color:white;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, #04beab 0%, rgb(0, 255, 255) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: rgb(3 3 94);
  font-size: 18px;
  font-weight: 600;
`;



const Contact = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(null); // null indicates message is not shown
  const form = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_uty0x1f', 'template_ydyab6a', form.current, 'GA0Zx_HidQV01eD3A')
      .then(() => {
        setOpen(true);
        setSuccess(true); // Set success state to true
        form.current.reset();
        setTimeout(() => {
          setOpen(false);
          setSuccess(null); // Reset the state after 5 seconds
        }, 5000);
      })
      .catch((error) => {
        setOpen(true);
        setSuccess(false);
        console.error('Email send error:', error);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title data-aos="flip-left" data-aos-duration="2000">Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm data-aos="zoom-out" data-aos-duration="2000" ref={form} onSubmit={handleSubmit}>
          <ContactTitle>🚀Email Me 🚀</ContactTitle>
          <ContactInput type="email" placeholder="Your Email" name="from_email" required />
          <ContactInput type="text" placeholder="Your Name" name="from_name" required />
          <ContactInput type="text" placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" value="Send" />
          {success !== null && (
            <div style={{ textAlign: 'center', color: success ? '#7FFF00' : '#EF0107' }}>
              {success ? '🏆Email sent successfully!🏆' : '❌Email not sent successfully ❌'}
            </div>
          )}
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={success ? 'Email sent successfully!' : 'Email not sent successfully'}
          severity={success ? 'success' : 'error'}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;

