// Import necessary libraries and components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../Components/ui/tabs";
import styled from "styled-components";
import avar1 from "../../assets/Images/Review1.webp"
import p1 from "../../assets/Images/Review1.webp"
import p2 from "../../assets/Images/Review1.webp"
import p3 from "../../assets/Images/Review1.webp"

// Styled components for the tabs and review card
const TabsContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  max-width:1200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; // Add margin-bottom to create space between the card and tabs
`;
const TabsWrapper = styled.div`
  max-width: 1300px; // Set a maximum width
  margin: 0 auto; // Center the tabs
`;

const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Star = styled.span`
  color: gold;
  font-size: 18px;
`;



const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const ReviewText = styled.p`
  margin-bottom: 10px;
`;

const ReviewDetails = styled.div`
  font-size: 12px;
  color: #777;
  display: flex;
  align-items: center;
`;

const Reviewer = styled.span`
  margin-right: 8px;
`;
const DescriptionImages = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 20px; /* Reduce the gap on smaller screens */
  }
`;

const DescriptionImage = styled.img`
  width: 20%; /* Initial width */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 30%; /* Adjust width for smaller screens */
  }
`;

// Review data
const reviews = [
  {
    rating: 4,
    title: "Great Product!",
    text: "I recently purchased this product, and I'm thoroughly impressed with its performance. It exceeded my expectations in terms of quality and functionality.",
    reviewer: "John Doe",
    date: "May 1, 2023",
    avatar: avar1
  },
  {
    rating: 3,
    title: "Good but could be better",
    text: "The product works well, but there are a few areas that could be improved. Overall, it's a decent purchase.",
    reviewer: "Jane Smith",
    date: "April 25, 2023",
    avatar: avar1,
  },
  
];

// CustomTabs component
const ProductDescriptionTabs = ({ descriptionTab, reviews ,descriptionImages}) =>{
  return (
    <TabsContainer>
         <TabsWrapper>
      <Tabs defaultValue="Description" className="w-full">
        <TabsList>
          <TabsTrigger value="Description" >Description</TabsTrigger>
          <TabsTrigger value="Reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="Description">
            <p>{descriptionTab}</p>
            {descriptionImages && (
              <DescriptionImages>
                {descriptionImages.map((image, index) => (
                  <DescriptionImage key={index} src={image} alt={`Product Image ${index + 1}`} />
                ))}
              </DescriptionImages>
            )}
            </TabsContent>
        <TabsContent value="Reviews">
       
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewHeader>
                <Avatar>
                  <img src={review.avatar} alt="Reviewer's Avatar" />
                </Avatar>
                <div>
                  <Rating>
                    {Array(review.rating).fill().map((_, i) => (
                      <Star key={i}>&#9733;</Star>
                    ))}
                    {Array(5 - review.rating).fill().map((_, i) => (
                      <Star key={i}>&#9734;</Star>
                    ))}
                  </Rating>
                  <Title>{review.title}</Title>
                </div>
              </ReviewHeader>
              <ReviewText>{review.text}</ReviewText>
              <ReviewDetails>
                <Reviewer>Reviewed by {review.reviewer}</Reviewer>
                on {review.date}
              </ReviewDetails>
            </ReviewCard>
          ))}
       
        </TabsContent>
      </Tabs>
      </TabsWrapper>
    </TabsContainer>
  );
};

export default ProductDescriptionTabs;
