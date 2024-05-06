import React from 'react'
import headingBackground from "../../assets/Images/menu-bg.webp"
import styled from 'styled-components';
import RestaurantCard from '@/Components/RatingAndReview/RatingAndReview';
import restaurant1 from "../../assets/Images/Restaurant1.webp"
import restaurant2 from "../../assets/Images/Restaurant2.webp"
import restaurant3 from "../../assets/Images/Restaurant1.webp"
import avar1 from "../../assets/Images/Review1.webp"

const CardData = [
    {
      image: restaurant1,
      title: 'VeganizZze e-book',
      rating: 4.5,
      reviewCount: 20,
      description: 'Discover our curated selection of vegan fridge essentials, including oat milk, vegan cheese, vegan butter, hummus, vegan mayonnaise, tahini, and more.',
      descriptionTab: 'Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum.',
      reviews: [
        {
          rating: 4,
          title: "Great Product!",
          text: "Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum.",
          reviewer: "John Doe",
          date: "May 1, 2023",
          avatar: avar1,
        },
        {
          rating: 4,
          title: "Great Product!",
          text: "Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum.",
          reviewer: "John Doe",
          date: "May 1, 2023",
          avatar: avar1,
        },
       
      ],
    },
    {
      image: restaurant2,
      title: 'VeganizZze e-book',
      rating: 4.2,
      reviewCount: 15,
      description: 'Discover our curated selection of vegan fridge essentials, including oat milk, vegan cheese, vegan butter, hummus, vegan mayonnaise, tahini, and more..',
      descriptionTab: 'Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum.',
      reviews: [
        {
          rating: 5,
          title: "Delicious!",
          text: "These snacks are amazing! I love the variety and the taste. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum",
          reviewer: "Sarah Johnson",
          date: "April 28, 2023",
          avatar: avar1,
        },
        
      ],
      
    },
    {
      image: restaurant3,
      title: 'VeganizZze e-book',
      rating: 4.5,
      reviewCount: 20,
      description: 'Discover our curated selection of vegan fridge essentials, including oat milk, vegan cheese, vegan butter, hummus, vegan mayonnaise, tahini, and more.',
      descriptionTab: 'Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum.',
      reviews: [
        {
          rating: 4,
          title: "Great Product!",
          text: "I recently purchased this product, and I'm thoroughly impressed with its performance. It exceeded my expectations in terms of quality and functionality.Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum",
          reviewer: "John Doe",
          date: "May 1, 2023",
          avatar: avar1,
        },
      ],
      
    },
   
    // Add more products as needed
  ];
  

const Title = styled.h2`
  font-size: 48px;
  font-family: 'Playfair Display', serif;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
`;

const Restaurants = () => {
  return (
    <div>
      <div
        className="blogs-heading-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          padding: '5%',
          color: 'white',
        }}
      >
        <Title>VeganizZzed dining in Dublin</Title>
      </div>
      <CardContainer>
      {CardData.map((card, index) => (
        <RestaurantCard
            key={index}
            image={card.image}
            title={card.title}
            rating={card.rating}
            reviewCount={card.reviewCount}
            description={card.description}
            descriptionTab={card.descriptionTab}
            reviews={card.reviews} // Add this line
        />
        ))}
      </CardContainer>
    </div>
  );
}

export default Restaurants;