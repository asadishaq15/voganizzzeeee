import React from 'react';
import Footer from '../Components/Footer/footer';

import Navbar222 from '../Components/Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar222 />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;