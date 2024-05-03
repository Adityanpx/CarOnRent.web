"use client";
import Carcards from "@/components/Home/Carcards";
import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import Searchinput from "@/components/Home/Searchinput";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsLists, setCarsLists] = useState<any>([]);

  useEffect(() => {
    // Call the async function getCarsData instead of getCarsList
    getCarsData();
  }, []);

  const getCarsData = async () => {
    try {
      // Call your API or perform any async operation to fetch cars data
      const result = await fetch("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clth65da4005x07w1kprvsm8z/master");
      const data = await result.json();
      setCarsLists(data.carLists);
      console.log(data);
    } catch (error) {
      console.error("Error fetching cars list:", error);
    }
  };

  return (
    <div className="p-5 bg-white sm:px-10 md:px-20">
      <Hero />
      <Searchinput />
      <CarsFiltersOptions />
      <CarsList carsLists={carsLists}/>
      <Carcards/>
    </div>
  );
}
