import React from 'react';
import firstslide from '../images/firstslide.jpg';
const HomePage = () => {
  return (
    <div className= "background-image" style={{ 
      backgroundImage: `url(${firstslide})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minHeight: '100vh'
    }}>
    <div className="overlay">
      <h1 style="color: white">Welcome to PustakKosh</h1>
    </div>
    </div>
  );
};
export default HomePage;
