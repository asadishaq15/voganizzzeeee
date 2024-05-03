import React from 'react';
import styled from 'styled-components';
import whatsAppIcon from "../../assets/whatsapp.webp"
import FacebookIcon from "../../assets/facbook.webp"
import LinkedInIcon from "../../assets/linkedIn.webp"
import InstagramIcon from "../../assets/instagram.webp"

const FooterContainer = styled.footer`
  color: #fff;
  bottom: 0;
  width: 100%;
  margin-top: 10px;
`;

const InnerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 50px;
  padding: 50px;
  border-radius: 20px;
  display: flex;
  border: solid 2px #gray;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    margin:30px;

  }
`;

const LeftHalf = styled.div`
  flex: 1;
`;

const RightHalf = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ShareText = styled.p`
  margin: 0;
  color: #1B2124;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 10px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const TextContainer = styled.div`
  background-color: #000000;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <LeftHalf>
          <ShareText>Share this Page</ShareText>
        </LeftHalf>
        <RightHalf>
          <IconContainer>
            <Icon src={whatsAppIcon} alt="WhatsApp" />
            <Icon src={FacebookIcon} alt="Facebook" />
            <Icon src={InstagramIcon} alt="Instagram" />
            <Icon src={LinkedInIcon} alt="LinkedIn" />
          </IconContainer>
        </RightHalf>
      </InnerContainer>
      <TextContainer>
        2024 VeganizZze Inc. All Rights Reserved.
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
