import React, { useState, useEffect } from 'react';
import './portfolioStats.css';
import portfolioStats from "../../assets/portfolioStats.png"

const PortfolioStats = () => {
  const [HappyClients, setHappyClients] = useState(0);
  const [Countries, setCountries] = useState(0);
  const [Projects, setProjects] = useState(0);

  useEffect(() => {
    const animateCount = (targetValue, setValue) => {
      let currentValue = 0;
      const step = Math.ceil(targetValue / 600);

      const interval = setInterval(() => {
        currentValue += step;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
        }
        setValue(currentValue);
      }, 20);
    };

    let happyClientsInterval = animateCount(10, setHappyClients);
    let countriesInterval = animateCount(70, setCountries);
    let projectsInterval = animateCount(360, setProjects);

    return () => {
      clearInterval(happyClientsInterval);
      clearInterval(countriesInterval);
      clearInterval(projectsInterval);
    };
  }, []);

  return (
    <div className="PortfolioMain">
          <div className="portfolio-stats">
            <h2 className="stats-heading">Software success in numbers</h2>
    <div className="portfolio-stats-container">

      <div className="stat-column">
        <p className="stat-value">{HappyClients}K</p>
        <p className="stat-description">Happy clients all around the world as one of the world’s leading management companies, we implement solutions.</p>
      </div>
      <div className="stat-column">
        <p className="stat-value">{Countries}+</p>
        <p className="stat-description">Countries all around the world as one of the world’s leading management companies, we implement solutions.</p>
      </div>
      <div className="stat-column">
        <p className="stat-value">{Projects}+</p>
        <p className="stat-description">Projects all around the world as one of the world’s leading management companies, we implement solutions.</p>
      </div>
      <div className="stat-column image-column">
        <img src={portfolioStats} alt="Portfolio Stats" />
      </div>
    </div>
    </div>
  </div>
  );
};

export default PortfolioStats;
