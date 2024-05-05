import eBook from "../../assets/Images/BookImage.webp"
import ProductPhotos from "../../assets/Images/DescriptionImage1.webp"
import ProductPhotos2 from "../../assets/Images/DescriptionImage2.webp"
import ProductPhotos3 from "../../assets/Images/DescriptionImage3.webp"
import avar1 from "../../assets/Images/Review1.webp"
const ShopCardData = [
    {
      image: eBook,
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
          rating: 3,
          title: "Great Product!",
          text: "I recently purchased this product, and I'm thoroughly impressed with its performance. It exceeded my expectations in terms of quality and functionality.",
          reviewer: "John Doe",
          date: "May 1, 2023",
          avatar: avar1,
        },
      ],
      descriptionImages: [ProductPhotos, ProductPhotos2, ProductPhotos3], // Add the descriptionImages array
    },
    {
      image: eBook,
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
        {
          rating: 4,
          title: "Excellent!",
          text: "These snacks are amazing! I love the variety and the taste.Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum",
          reviewer: "Sarah Johnson",
          date: "April 28, 2023",
          avatar: avar1,
        },
      ],
      descriptionImages: [ProductPhotos, ProductPhotos2, ProductPhotos3], // Add the descriptionImages array (you can change the order)
    },
    {
      image: eBook,
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
        {
          rating: 4,
          title: "Great Product!",
          text: "I recently purchased this product, and I'm thoroughly impressed with its performance. It exceeded my expectations in terms of quality and functionality. Lorem ipsum dolor sit amet consectetur. Id non eu mattis laoreet sed massa sed. Elementum amet accumsan integer vulputate. In porta massa proin nec volutpat. Donec tellus ultrices mi sit varius pharetra eget amet. Commodo tempor mattis dictum gravida tortor vel sit sit. Eget dolor at aliquam sed blandit odio sit sem viverra. Massa maecenas sed faucibus ut pharetra a imperdiet vitae. Consectetur eget cum nisl elit tempor et at euismod orci. Turpis mauris tempor curabitur porttitor elementum",
          reviewer: "John Doe",
          date: "May 1, 2023",
          avatar: avar1,
        },
      ],
      descriptionImages: [ProductPhotos, ProductPhotos2, ProductPhotos3], // Add the descriptionImages array
    },
   
    // Add more products as needed
  ];
  
  export default ShopCardData;
