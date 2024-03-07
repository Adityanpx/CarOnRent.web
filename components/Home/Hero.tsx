import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2 className='text-[40px] md:text-[60px] font-bold'  >
          Premiun car Rental in your area</h2>
          <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>
            Book the selected car effortelessly, Pay for Driving only, Book the Car Now</h2>

            <button className='p-2 mt-5 bg-black text-white px-4 
            rounded-md hover:scale-105 transition-all'> Explore Cars</button>
          
        

        

      </div>
      <div>
        <img src='https://img.freepik.com/premium-photo/car-isolated-white-background-bmw-white-car-blank-clean-white-background-turn-white-black_655090-606149.jpg'
        alt='CAR'
        className='md:ml-40 object-cover '
        width={400}
        height={500}
        />
      </div>
    

    </div>
  )
}

export default Hero