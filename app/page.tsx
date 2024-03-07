"use client"
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import Searchinput from "@/components/Home/Searchinput";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsLists, setCarsLists] = useState<any>([]);

  useEffect(() => {
    getCarsList();
  }, []);

  const getCarsList = async () => {
    const result = await getCarsList(); 
    setCarsLists(result?.carLists);
    console.log(result);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <Searchinput />
      <CarsFiltersOptions />
      <CarsList carsLists={carsLists}/>
    </div>
  );
}
