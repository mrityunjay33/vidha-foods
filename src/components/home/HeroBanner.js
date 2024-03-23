import React from 'react'

const HeroBanner = () => {
  const bannerData = {
    title: "Welcome to Our Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Learn More",
    buttonLink: "/about",
    imageUrl: "https://via.placeholder.com/800x300", // Placeholder image URL
  };

  return (
    <div className="banner">
      <img src={bannerData.imageUrl} alt="Banner" />
      <div className="banner-content">
        <h2>{bannerData.title}</h2>
        <p>{bannerData.description}</p>
        <a href={bannerData.buttonLink} className="banner-button">{bannerData.buttonText}</a>
      </div>
    </div>
  );
};

export default HeroBanner