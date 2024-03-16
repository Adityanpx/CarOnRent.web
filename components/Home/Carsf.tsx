import React from 'react'

function Carsf() {
  return (
    <div className="mt-10 flex items-center justify-between ">
      <div>
        <h2 className="text-[30px] font-bold"> Cars Catalog</h2>
        <h2> Explore your cars catalog</h2>
      </div>
      <div className="flex gap-5 ">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Prize
          </option>
          <option>min to max</option>
          <option>max to min</option>
        </select>

        <select className="select select-bordered
        hidden  md:block w-full max-w-xs">
          <option disabled selected>
            Manufactural
          </option>
          <option>BMW</option>
          <option>AUDI</option>
        </select>

      </div>
    </div>
  )
}

export default Carsf