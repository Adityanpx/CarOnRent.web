import React from 'react';

function CarsList(props: any) {
  return (
    <div>
      {props.carsLists.map((car: any, index: number) => (
        <div key={index}>
          {car.name}
          {/* Render other car details here */}
        </div>
      ))}
    </div>
  );
}

export default CarsList;
