import React from 'react'

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-12">
          <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
            <path d="M101 12.5H115.5V17.5H106.5V22.5H114V27.5H106.5V37.5H101V12.5Z" fill="white"/>
            <path d="M118 12.5H123.5V37.5H118V12.5Z" fill="white"/>
            <path d="M126 12.5H131.5V32.5H140V37.5H126V12.5Z" fill="white"/>
            <path d="M0 12.5H5.5V37.5H0V12.5Z" fill="#FF3D81"/>
            <path d="M8 12.5H13.5V37.5H8V12.5Z" fill="#FF3D81"/>
            <path d="M16 12.5H21.5V37.5H16V12.5Z" fill="#FF3D81"/>
            <path d="M32 12.5H37.5V37.5H32V12.5Z" fill="white"/>
            <path d="M40 12.5H45.5V37.5H40V12.5Z" fill="white"/>
            <path d="M56 12.5H61.5V37.5H56V12.5Z" fill="white"/>
            <path d="M24 12.5H29.5V37.5H24V12.5Z" fill="#FF3D81"/>
            <path d="M48 12.5H53.5V37.5H48V12.5Z" fill="white"/>
            <path d="M64 12.5H69.5V37.5H64V12.5Z" fill="white"/>
            <path d="M72 12.5H77.5V37.5H72V12.5Z" fill="white"/>
            <path d="M80 12.5H85.5V37.5H80V12.5Z" fill="white"/>
            <path d="M88 12.5H93.5V37.5H88V12.5Z" fill="white"/>
          </svg>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Technology</a>
          <a href="#" className="bg-[#1e293b] px-6 py-2 rounded-full text-white hover:bg-[#2a3a50] transition">About</a>
        </nav>
      </div>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">Learn more</button>
        <button className="bg-[#2a3a50] text-white px-6 py-2 rounded-full hover:bg-[#3a4a60] transition">Join us</button>
      </div>
    </header>
  )
}

export default Header
