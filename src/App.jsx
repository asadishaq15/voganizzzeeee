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
import VoganizzzeShop from './pages/Shop/shop';
import Beauty from './pages/Beauty/beauty';
import HouseHold from './pages/HouseHold/houseHold';
import Travel from './pages/Travel/travel';
import { Restaurant } from '@mui/icons-material';
import Restaurants from './pages/Restaurants/restaurants';
import FoodShops from './pages/FoodShops/foodShops';
import Cosmetics from './pages/Cosmetics/cosmetics';
import MyProfile from './pages/ProfilePage/profile';
import TravelCards from './pages/TravelCards/travelCards';


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
          <Route
            path="/travel"
            element={
              <MainLayout>
             <Travel/>
              </MainLayout>
            }
          />
          <Route
            path="/restaurants"
            element={
              <MainLayout>
             <Restaurants/>
              </MainLayout>
            }
          />
          <Route
            path="/foodshops"
            element={
              <MainLayout>
             <FoodShops/>
              </MainLayout>
            }
          />
          <Route
            path="/cosmetics"
            element={
              <MainLayout>
             <Cosmetics/>
              </MainLayout>
            }
          />
          <Route
            path="/myprofile"
            element={
              <MainLayout>
             <MyProfile/>
              </MainLayout>
            }
          />
          <Route
            path="/travelcards"
            element={
              <MainLayout>
             <TravelCards/>
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