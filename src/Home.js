import React from 'react';
import AllSupplies from './images/dog_supplies.jpg';

function Home() {
  return (
    <>
      <div class="section-title">
        <h1>Dog Supplies</h1>
        <h2>High-quality products for all your pup's needs.</h2>
      </div>
      <img class="main-img" src={AllSupplies} alt="Many pet supplies" />
    </>
  );
}

export default Home;
