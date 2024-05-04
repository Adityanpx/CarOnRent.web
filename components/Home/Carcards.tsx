import React from 'react';

function CarCard({ car, onAddToCart }) {
  const handleAddToCartClick = () => {
    onAddToCart(car);
  };

  return (
    <div className="max-w-xs mx-auto mb-8 mt-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
          <p className="text-gray-500 mb-2">${car.pricePerHour}/hr</p>
          <button onClick={handleAddToCartClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function CarCards({ onAddToCart }) {
  // Dummy car data
  const cars = [
    {
      name: 'Car 1',
      image: 'rr1.jpeg',
      pricePerHour: 25,
    },
    {
      name: 'Car 2',
      image: 'mahindra3.avif',
      pricePerHour: 30,
    },
    {
      name: 'Car 3',
      image: 'mahindra1.jpeg',
      pricePerHour: 25,
    },
    {
      name: 'Car 4',
      image: 'bmw1.jpeg',
      pricePerHour: 30,
    },
    {
      name: 'Car 5',
      image: 'mahindra2.jpeg',
      pricePerHour: 25,
    },
    {
      name: 'Car 6',
      image: 'mercedez1.webp',
      pricePerHour: 30,
    },
    {
      name: 'Car 7',
      image: 'tata1.jpeg',
      pricePerHour: 25,
    },
    {
      name: 'Car 8',
      image: 'mercedez2.webp',
      pricePerHour: 30,
    },
    
    {
      name: 'Car 9',
      image: 'huyndai1.jpeg',
      pricePerHour: 30,
    },
    // Add more cars here as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default CarCards;
