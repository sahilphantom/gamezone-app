import React, { useState, useRef, useEffect } from 'react'
import { Menu, Search, X } from 'lucide-react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const searchInputRef = useRef(null)
  
  // Focus search input when activated
  useEffect(() => {
    if (searchActive && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchActive])
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-900/30 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - Hamburger Menu */}
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-green-900/20 transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-green-500" />
          </button>
          
          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 rounded-md bg-black border border-green-900/50 shadow-lg shadow-green-900/20 overflow-hidden">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-900/20 hover:text-green-400">Home</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-900/20 hover:text-green-400">Technology</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-900/20 hover:text-green-400">About</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-900/20 hover:text-green-400">Features</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-green-900/20 hover:text-green-400">Contact</a>
              </div>
            </div>
          )}
        </div>
        
        {/* Center - Animated Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className={`relative flex items-center transition-all duration-300 ${searchActive ? 'w-full' : 'w-[200px] mx-auto'}`}>
            <div className={`absolute inset-0 bg-green-900/20 rounded-full transition-all duration-300 ${searchActive ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className="relative w-full flex items-center">
              <button 
                onClick={() => setSearchActive(!searchActive)}
                className="absolute left-2 p-1 rounded-full hover:bg-green-900/20 transition-colors z-10"
                aria-label={searchActive ? "Close search" : "Open search"}
              >
                {searchActive ? (
                  <X className="h-4 w-4 text-green-500" />
                ) : (
                  <Search className="h-4 w-4 text-green-500" />
                )}
              </button>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className={`w-full bg-transparent border border-green-900/30 rounded-full py-2 pl-10 pr-4 text-white placeholder-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-300 ${searchActive ? 'opacity-100' : 'opacity-70'}`}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              />
            </div>
          </div>
        </div>
        
        {/* Right side - Login/Signup Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-sm text-white hover:text-green-400 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
