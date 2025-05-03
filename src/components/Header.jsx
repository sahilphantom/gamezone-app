"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, Search, X, Home, Cpu, Info, Zap, MessageSquare, ChevronRight } from "lucide-react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const searchInputRef = useRef(null)
  const sidebarRef = useRef(null)

  // Focus search input when activated
  useEffect(() => {
    if (searchActive && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchActive])

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Menu"]')
      ) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-40  border-b border-green-900/30 bg-black/80 backdrop-blur-sm">
        <div className="container w-[95%] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left side - Hamburger Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-green-900/20 transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6 text-green-500" />
            </button>
          </div>

          {/* Center - Animated Search Bar */}
          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <div
              className={`relative flex items-center transition-all duration-300 ${searchActive ? "w-full" : "w-[200px] mx-auto"}`}
            >
              <div
                className={`absolute inset-0 bg-green-900/20 rounded-full transition-all duration-300 ${searchActive ? "opacity-100" : "opacity-0"}`}
              ></div>
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
                  className={`w-full bg-transparent border border-green-900/30 rounded-full py-2 pl-10 pr-4 text-white placeholder-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all duration-300 ${searchActive ? "opacity-100" : "opacity-70"}`}
                  onFocus={() => setSearchActive(true)}
                  onBlur={() => setSearchActive(false)}
                />
              </div>
            </div>
          </div>

          {/* Mobile search icon */}
          <div className="sm:hidden">
            <button className="p-2 rounded-full hover:bg-green-900/20 transition-colors" aria-label="Search">
              <Search className="h-8 w-8 text-green-500" />
            </button>
          </div>

          {/* Right side - Login/Signup Buttons */}
          <div className="flex items-center">
            <button className="px-3 py-2 text-sm text-white hover:text-green-400 transition-colors hidden sm:block">
              Login
            </button>
            <button className="px-3 py-2 text-sm bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Animated Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] md:w-[350px] bg-black border-r border-green-900/30 shadow-lg shadow-green-900/20 transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{
            boxShadow: menuOpen ? "0 0 20px rgba(0, 255, 128, 0.2)" : "none",
          }}
          data-sidebar-open={menuOpen}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-900/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-black font-bold">GG</span>
              </div>
              <span className="text-xl font-bold text-white">GameArena</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-green-900/20 transition-colors"
            >
              <X className="h-5 w-5 text-green-500" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="py-4 h-[calc(100%-64px)] overflow-y-auto scrollbar-hide">
            <div className="px-4 mb-2 text-xs font-semibold text-green-500 uppercase tracking-wider">
              Main Navigation
            </div>

            {/* Menu Items */}
            <nav>
              {[
                { icon: Home, label: "Home", href: "#" },
                { icon: Cpu, label: "Games", href: "#" },
                { icon: Info, label: "Tournaments", href: "#" },
                { icon: Zap, label: "Leaderboards", href: "#" },
                { icon: MessageSquare, label: "Community", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-green-900/20 hover:text-white transition-colors group"
                  style={{
                    animationDelay: `${100 + index * 50}ms`,
                    "--index": index,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-green-500" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>

            {/* Additional menu sections */}
            <div className="mt-6">
              <div className="px-4 mb-2 text-xs font-semibold text-green-500 uppercase tracking-wider">
                Gaming Resources
              </div>

              <nav>
                {[
                  { label: "Game Guides", href: "#" },
                  { label: "Patch Notes", href: "#" },
                  { label: "Esports Events", href: "#" },
                  { label: "Merchandise", href: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-green-900/20 hover:text-white transition-colors group"
                    style={{
                      animationDelay: `${350 + index * 50}ms`,
                      "--index": index + 5,
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-green-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-900/30 bg-black">
              <div className="flex flex-col gap-2">
                <button className="w-full py-2 text-sm bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors">
                  Sign Up
                </button>
                <button className="w-full py-2 text-sm border border-green-900/50 hover:bg-green-900/20 text-white rounded-md transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
