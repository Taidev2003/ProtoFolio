
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import { useState } from "react";


const index = () => {

  const [nav,setNav] =useState(false)
  const openNav =() => setNav(true)
  const closeNav =() => setNav(false)
  return ( <div className="overflow-x-hidden">
    <div>
      {/* Navbar */}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>
      {/* HeroSection */}
      <Hero />
      </div>
  </div> );

}
 
export default index;