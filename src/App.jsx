import { useState } from 'react'

import './App.css'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import PortfolioStats from './Components/PortfolioStats/PortfolioStats'
import PortableSoftware from './Components/PortableSoftware/portableSoftware'
import ToolCategories from './Components/ToolCategories/toolCategories'
import WorkingProcess from './Components/WorkingProcess/workingProcess'
import Categories from './Components/Categories/categories'
import Hero from './Components/Hero/hero'
import ImproveContainers from './Components/ImproveBusiness/improveBusiness'

function App() {

  return (
    <>
    <Hero/>
    <Categories/>
    <PortfolioStats/>
    <PortableSoftware/>
    <ToolCategories/>
    <WorkingProcess/>
    <ImproveContainers/>
    <Footer/>
    </>
  )
}

export default App
