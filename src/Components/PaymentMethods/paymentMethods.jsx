import React from 'react';
import styled from 'styled-components';
import paymentIcon1 from '../../assets/Images/method1.webp';
import paymentIcon2 from '../../assets/Images/method2.webp';
import paymentIcon3 from '../../assets/Images/method3.webp';
import paymentIcon4 from '../../assets/Images/method4.webp';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const Heading = styled.h3`
  font-family: 'Playfair Display', sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const PaymentIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const PaymentIcon = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin: 10px;
  @media (max-width: 768px) {
    width: 60px;
  height: 60px;
  }
`;

const GuaranteedSafeCheckoutsText = styled.p`
  font-size: 30px;
  color: #888;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PaymentMethodsAccepted = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Payment Methods Accepted</Heading>
        <PaymentIconsContainer>
          <PaymentIcon src={paymentIcon1} alt="Payment Option 1" />
          <PaymentIcon src={paymentIcon2} alt="Payment Option 2" />
          <PaymentIcon src={paymentIcon3} alt="Payment Option 3" />
          <PaymentIcon src={paymentIcon4} alt="Payment Option 4" />
        </PaymentIconsContainer>
        <GuaranteedSafeCheckoutsText>Guaranteed Safe Checkouts</GuaranteedSafeCheckoutsText>
      </Container>
    </Wrapper>
  );
};

export default PaymentMethodsAccepted;