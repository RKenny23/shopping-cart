import React, { useEffect } from 'react';
import AllSupplies from './images/dog_supplies.jpg';

function Home() {
  useEffect(() => {
    document.body.classList.add('bg-hidden');

    return () => {
      document.body.classList.remove('bg-hidden');
    };
  });
  return (
    <div className="home">
      <div className="hero-text">
        <h1>We have the best.</h1>
        <h2>High-quality products for all your pup's needs.</h2>
      </div>
      <img className="main-img" src={AllSupplies} alt="Many pet supplies" />
    </div>
  );
}

export default Home;
