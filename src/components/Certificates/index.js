import React from 'react';
import styled from 'styled-components';
import Certificate1 from '../../images/Certificate1.jpg'; // Import the image for DSA in Java programming
import Certificate2 from '../../images/Certificate2.jpg'; // Import the image for MERN Stack

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(to bottom, #ff9900 15%, #ccff99 91%);
  
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color:rgb(65 3 3);
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color:rgb(65 3 3);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  
`;

const CertificateItem = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgb(65 3 3);
    border: 0.1px solid #cc6600;
    box-shadow: rgb(212 218 42 / 50%) 0px 4px 24px; /* Magenta box shadow */
  border-radius: 16px;
  padding: 18px 36px;
  margin-bottom: 49px;
  transition: all 0.4s ease-in-out; /* Add transition for smoother effect */

  // &:hover {
  //   transform: scale(1.05);
  //   transition: all 0.4s ease-in-out;
  //   box-shadow:  10px 10px 30px #4682B4, /* Blue shadow on hover */
  //               -10px -10px 30px  violet, /* Pink shadow on hover */
  //               rgba(0, 255, 0, 0.5) 0px 4px 24px; /* Green shadow on hover */
  //   filter: brightness(1);
  // }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;


const CertificateTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px; /* Adjusted margin */
  text-align: center;
`;

const CertificateDescription = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const CertificateButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: brown !important;
  background-color:yellow; /* Linear gradient of red and goldenrod */
  border: 3px solid goldenrod;
  border-radius: 50px;
  padding: 12px 20px; /* Adjusted padding */
  display: block;
  margin: 0 auto;
  cursor: pointer;
  text-decoration:none !important;
  transition: background-color 0.3s ease;
  // &:hover {
  //   background: #0b7811;
  //    color:white;
  // }
`;

const Certificate = ({ title, certificate, description }) => {
    let certificateImage;
    if (title === "DSA in Java ") {
        certificateImage = Certificate2;
    } else if (title === "MERN Stack") {
        certificateImage = Certificate1;
    }

    return (
        <CertificateItem>
            <CertificateTitle>{title}</CertificateTitle>
            <CertificateImage src={certificateImage} alt={title} />
            <CertificateDescription>{description}</CertificateDescription>
            <CertificateButton >
                <a href={certificate} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'brown' }}>View Certificate</a>
            </CertificateButton>
        </CertificateItem>
    );
};

const Certificates = () => {
    // Import the certificates data
    const certificates = [
        {
            title: "DSA in Java ",
            description: "I have done certification of DSA in Java from MindLuster.",
            certificate: " https://drive.google.com/file/d/1T4exvtyrMCFoyjckA1CAvKeVLIVNyU4o/view?usp=drive_link",
        },
        {
            title: "MERN Stack",
            description: "I have done certification of M.E.R.N Stack from Tutedude",
            certificate: "https://drive.google.com/file/d/10Ku1ffTsBn5a2wgJw_akMSB5RotxGHaA/view?usp=drive_link",
        }
    ];
   
    return (
        <Container id="certificates">
            <Wrapper>
                <Title data-aos="flip-left" data-aos-duration="1000">Certificates</Title>
                <Desc>Here are some of my certificates:</Desc>
                <CertificateContainer data-aos="flip-left" data-aos-duration="1000">
                    {certificates.map((certificate, index) => (
                        <Certificate data-aos="zoom-out" data-aos-duration="2000" key={index} title={certificate.title} certificate={certificate.certificate} description={certificate.description} />
                    ))}
                </CertificateContainer>
            </Wrapper>
        </Container>
    );
};

export default Certificates;
