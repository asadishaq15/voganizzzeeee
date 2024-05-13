import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%; 

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const WriteReviewContainer = styled.div`
background-color: #f8f8f8;
  padding: 20px;
  max-width:800px;
  border-radius: 8px;
  margin-bottom: 20px;
  margin: 0 auto;


  @media (max-width: 768px) {
    padding: 10px;
  }
`;


const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? 'gold' : '#ccc')};
  font-size: 24px;
  cursor: pointer;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #71991b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: auto; 

  &:hover {
    background-color: #5f7f18;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
`;
const TextareaWrapper = styled.div`
  width: 100%;
`;
const WriteReviewComponent = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Rating:', rating);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Review Text:', reviewText);
  };

  return (
    <Wrapper>


    <WriteReviewContainer>
      <Heading>Write Your Review</Heading>
      <RatingContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            filled={value <= rating}
            onClick={() => handleRatingClick(value)}
          >
            &#9733;
          </Star>
        ))}
      </RatingContainer>
   
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <InputWrapper>
            <Input
              type="name"
              id="name"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <InputWrapper>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </InputWrapper>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="reviewText">Review Text</Label>
          <TextareaWrapper>
            <Textarea
              id="reviewText"
              value={reviewText}
              onChange={handleReviewTextChange}
              rows={4}
              required
            />
          </TextareaWrapper>
        </InputContainer>

      <SubmitButton type="submit" onClick={handleSubmit}>
        Submit Review
      </SubmitButton>
    </WriteReviewContainer>
    </Wrapper>
  );
};

export default WriteReviewComponent;