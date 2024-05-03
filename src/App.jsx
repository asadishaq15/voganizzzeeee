import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register/register'
import Header from './Components/Navbar/Navbar'
import Nav2 from './Components/header/Navbar2'
import Nav1 from './Components/Navbar/Navbar'
import Navbar222 from './Components/Navbar/Navbar'
import Footer from './Components/Footer/footer'
import HomePage from './pages/Home/homePage'
import Carousel from './Components/Carousel/carousel'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
        
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App