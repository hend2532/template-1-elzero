import { useState } from "react";
import { FaBars } from "react-icons/fa";
function Header() {
  const [isOpen,setIsOpen]=useState(true)
  return (
    <>
    <div className="flex h-[70px] w-100 justify-between items-center px-4 md:px-48  shadow-md relative">
      <img src="/images/logo.png" alt="logo" className="w-12 h-6"/>
      <FaBars onClick={()=> setIsOpen(!isOpen)} className="text-gray-600 cursor-pointer p-1"size={35}/>
    </div>
   {!isOpen &&  <nav className="absolute right-8 top-16 bg-white shadow-md px-20 py-4 rounded-md">
        <ul className="flex flex-col gap-4 ">
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
}
    </>
  )
}

export default Header
