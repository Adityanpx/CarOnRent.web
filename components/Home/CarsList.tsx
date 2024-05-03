import React from 'react';

function CarsList(props: any) {
  // Log the received props for debugging
  console.log(props.carsLists);

  // Check if carsLists is undefined or null
  if (!props.carsLists) {
    return <div>No cars available</div>; // Or any other fallback UI
  }

  return (
    <div>
      {props.carsLists.map((car: any, index: number) => (
        <div key={index}>
          {car.name}
        </div>
      ))}
    </div>
  );
}

export default CarsList;
