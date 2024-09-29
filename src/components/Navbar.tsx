'use client'

import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import { FaArrowUp, FaFilm, FaTv } from 'react-icons/fa'
import UnderConstruction from './UnderConstruction'
import { MenuItemProps } from './MenuItem'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedPage, setSelectedPage] = useState<string | null>(null)

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

  const handleNavItemClick = (pageName: string) => {
    setSelectedPage(pageName)
  }

  const watchlistItems: MenuItemProps[] = [
    { title: 'Series', address: '/watchlist/series', Icon: FaTv, param: 'series' },
    { title: 'Movies', address: '/watchlist/movies', Icon: FaFilm, param: 'movies' }
  ]

  const mediaItems: MenuItemProps[] = [
    { title: 'Series', address: '/media/series', Icon: FaTv, param: 'series' },
    { title: 'Movies', address: '/media/movies', Icon: FaFilm, param: 'movies' }
  ]

  return (
    <>
      <div className={`fixed top-20 left-0 right-0 z-50 flex dark:bg-primary-light bg-secondary-light p-4 lg:text-lg justify-center gap-6 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-opacity-50 dark:bg-opacity-50 shadow-md' : ''}`}>
        <NavbarItem title="Trending" param="fetchTrending" onClick={() => handleNavItemClick('Trending')} />
        <NavbarItem title="Top Rated" param="fetchTopRated" onClick={() => handleNavItemClick('TopRated')} />
        <NavbarItem title="Watchlist" param="watchlist" onClick={() => handleNavItemClick('Watchlist')} />
        <NavbarItem title="Media" param="media" onClick={() => handleNavItemClick('Media')} />
      </div>

      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}

      {selectedPage && (selectedPage === 'Watchlist' || selectedPage === 'Media') && (
        <div className="mt-24">
          <UnderConstruction pageName={selectedPage} />
        </div>
      )}
    </>
  )
}