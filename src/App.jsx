import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register/register';
import Login from './pages/Login/login';
import HomePage from './pages/Home/homePage';

import MainLayout from './Layouts/mainLayout';
import Menu from './pages/Menu/menu';
import Recipies from './pages/Recipies/recepies';
import PentryIdeation from './pages/PentryIdeation/pentryIdeation';
import ShopCard from './Components/ShopCart/shopCard';
import VoganizzzeShop from './pages/Shop/shop';
import Beauty from './pages/Beauty/beauty';
import HouseHold from './pages/HouseHold/houseHold';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/menu"
            element={
              <MainLayout>
                <Menu />
              </MainLayout>
            }
          />
          <Route
            path="/recipie"
            element={
              <MainLayout>
                <Recipies />
              </MainLayout>
            }
          />
          <Route
            path="/pentry"
            element={
              <MainLayout>
                <PentryIdeation />
              </MainLayout>
            }
          />
          <Route
            path="/shop"
            element={
              <MainLayout>
             <VoganizzzeShop/>
              </MainLayout>
            }
          />
          <Route
            path="/beauty"
            element={
              <MainLayout>
             <Beauty/>
              </MainLayout>
            }
          />
          <Route
            path="/household"
            element={
              <MainLayout>
             <HouseHold/>
              </MainLayout>
            }
          />
      
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;