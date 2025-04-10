// Import necessary libraries and components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../Components/ui/tabs";
import styled from "styled-components";
import avar1 from "../../assets/Images/Review1.webp"
import WriteReviewComponent from "../WriteReview/writeReview";

// Styled components for the tabs and review card
const TabsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
const TabsTriggerStyled = styled(TabsTrigger)`
font-size:18px;
  &:hover {
    background-color: #71991B;
    color: white;
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
  // Add more review objects as needed
];


// CustomTabs component
const CustomTabs = () => {
  return (
    <TabsContainer>
      <Tabs defaultValue="Description" className="w-full">
        <TabsList>
          <TabsTriggerStyled value="Description" style={{ 
                ":hover": { 
                backgroundColor: "#71991B",
                color: "white"
                }
            }} >Description</TabsTriggerStyled>
          <TabsTriggerStyled value="Reviews" style={{ 
                ":hover": { 
                backgroundColor: "#71991B",
                color: "white"
                }
            }}>Reviews</TabsTriggerStyled>
        </TabsList>
        <TabsContent value="Description">
          <p>
            Lorem ipsum dolor  amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum.
          </p>
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
           <WriteReviewComponent />
        </TabsContent>
      </Tabs>
    </TabsContainer>
  );
};

export default CustomTabs;
