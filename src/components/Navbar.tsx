'use client'

import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import { FaArrowUp } from 'react-icons/fa'
import WatchlistSection from './WatchlistSection' // New import

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showWatchlist, setShowWatchlist] = useState(false) // New state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavItemClick = (param: string) => {
    if (param === 'watchlist') {
      setShowWatchlist(true)
    } else {
      setShowWatchlist(false)
    }
  }

  return (
    <>
      <div className={`fixed top-20 left-0 right-0 z-50 flex dark:bg-primary-light bg-secondary-light p-4 lg:text-lg justify-center gap-6 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-opacity-50 dark:bg-opacity-50 shadow-md' : ''}`}>
        <NavbarItem title="Trending" param="fetchTrending" onClick={() => handleNavItemClick('trending')} />
        <NavbarItem title="Top Rated" param="fetchTopRated" onClick={() => handleNavItemClick('topRated')} />
        <NavbarItem title="Watchlist" param="watchlist" onClick={() => handleNavItemClick('watchlist')} />
      </div>

      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}

      {showWatchlist && <WatchlistSection />}
    </>
  )
}