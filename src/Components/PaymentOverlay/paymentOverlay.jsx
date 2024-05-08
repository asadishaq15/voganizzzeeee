import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import paymentIcon1 from '../../assets/Images/method1.webp';
import paymentIcon2 from '../../assets/Images/method2.webp';
import paymentIcon3 from '../../assets/Images/method3.webp';

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const OverlayContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;


const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 48%;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const QuantityButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 16px;
  cursor: pointer;
`;

const QuantityValue = styled.span`
  margin: 0 8px;
  font-size: 16px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0;
`;

const PriceDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PriceDetail = styled.div`
  font-size: 16px;
`;

const PriceDetailLabel = styled.span`
  font-weight: bold;
`;

const PriceDetailValue = styled.span`
  margin-left: 5px;
`;

const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PaymentIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const AddressContainer = styled.div`
  margin-bottom: 20px;
`;

const AddressInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

const SubmitButton = styled.button`
  background-color: #71991b;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: auto; 
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  align-items:right;
  background-color: none;
  border: none;
  width:auto;
  font-size: 20px;
  color: #888; // Changed the color to a lighter gray
  cursor: pointer;
  transition: color 0.3s ease; // Added transition for hover effect

  &:hover {
    background-color: transparent;
    color: #333; // Changed the color on hover to a darker gray
  }
`;




const PaymentOverlay = ({ onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [billingAddress, setBillingAddress] = useState('');
  const [dispatchAddress, setDispatchAddress] = useState('');
  const [sameAsBilling, setSameAsBilling] = useState(true);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0) { 
      setQuantity(newQuantity);
    }
  };

  const handleBillingAddressChange = (event) => {
    setBillingAddress(event.target.value);
    if (sameAsBilling) {
      setDispatchAddress(event.target.value);
    }
  };

  const handleDispatchAddressChange = (event) => {
    setDispatchAddress(event.target.value);
  };

  const handleSameAsBillingChange = (event) => {
    setSameAsBilling(event.target.checked);
    if (event.target.checked) {
      setDispatchAddress(billingAddress);
    } else {
      setDispatchAddress('');
    }
  };

  const handleSubmit = () => {
    // Handle payment submission logic here
    console.log('Payment submitted!');
    onClose();
  };



  return (
    <OverlayContainer>
        
      <OverlayContent>
      <CloseButton onClick={onClose}>×</CloseButton>
        <ProductsContainer>
          <ProductCard>
            <ProductImage src={product.image} alt={product.title} />
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <QuantityContainer>
                <QuantityButton onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityButton onClick={() => handleQuantityChange(1)}>+</QuantityButton>
              </QuantityContainer>
              <ProductPrice>${product.price}</ProductPrice>
            </ProductDetails>
          </ProductCard>
          {/* Add another product card if needed */}
          {/* <ProductCard>
            <ProductImage src={productImage2} alt="Product 2" />
            <ProductDetails>
              <ProductTitle>Product 2</ProductTitle>
              <QuantityContainer>
                <QuantityButton>-</QuantityButton>
                <QuantityValue>1</QuantityValue>
                <QuantityButton>+</QuantityButton>
              </QuantityContainer>
              <ProductPrice>$19.99</ProductPrice>
            </ProductDetails>
          </ProductCard> */}
        </ProductsContainer>
        <PriceDetailsContainer>
          <PriceDetail>
            <PriceDetailLabel>Subtotal:</PriceDetailLabel>
            <PriceDetailValue>${product.price * quantity}</PriceDetailValue>
          </PriceDetail>
          <PriceDetail>
            <PriceDetailLabel>Tax:</PriceDetailLabel>
            <PriceDetailValue>$0.00</PriceDetailValue>
          </PriceDetail>
          <PriceDetail>
            <PriceDetailLabel>Total:</PriceDetailLabel>
            <PriceDetailValue>${product.price * quantity}</PriceDetailValue>
          </PriceDetail>
        </PriceDetailsContainer>
        <PaymentOptionsContainer>
          <PaymentOption>
            <PaymentIcon src={paymentIcon1} alt="Payment Option 1" />
          </PaymentOption>
          <PaymentOption>
            <PaymentIcon src={paymentIcon2} alt="Payment Option 2" />
          </PaymentOption>
          <PaymentOption>
            <PaymentIcon src={paymentIcon3} alt="Payment Option 3" />
            </PaymentOption>
            </PaymentOptionsContainer>
            <AddressContainer>
            <h3>Billing Address</h3>
            <AddressInput type="text" placeholder="Enter billing address" value={billingAddress} onChange={handleBillingAddressChange} />
            <CheckboxContainer>
            <input type="checkbox" checked={sameAsBilling} onChange={handleSameAsBillingChange} />
            <CheckboxLabel>Same as billing address</CheckboxLabel>
            </CheckboxContainer>
            {!sameAsBilling && (
            <>
            <h3>Dispatch Address</h3>
            <AddressInput type="text" placeholder="Enter dispatch address" value={dispatchAddress} onChange={handleDispatchAddressChange} />
            </>
            )}
            </AddressContainer>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </OverlayContent>
            </OverlayContainer>
            );
            };

 export default PaymentOverlay;