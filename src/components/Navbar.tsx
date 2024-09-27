'use client'

import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import DropdownMenu from './DropdownMenu'
import { FaArrowUp, FaFilm, FaTv } from 'react-icons/fa'
import MediaSection, { MediaSectionProps } from './MediaSection'
import { MenuItemProps } from './MenuItem'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [selectedMedia, setSelectedMedia] = useState<MediaSectionProps | null>(null)

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

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(prev => prev === title ? null : title)
  }

  const handleNavItemClick = () => {
    setOpenDropdown(null)
  }

  const handleMediaClick = (category: 'series' | 'movies') => {
    setSelectedMedia({ category })
    setOpenDropdown(null)
  }

  const watchlistItems: MenuItemProps[] = [
    { title: 'Series', address: '/watchlist/series', Icon: FaTv, param: 'series', onClick: () => handleMediaClick('series') },
    { title: 'Movies', address: '/watchlist/movies', Icon: FaFilm, param: 'movies', onClick: () => handleMediaClick('movies') }
  ]

  const mediaItems: MenuItemProps[] = [
    { title: 'Series', address: '/media/series', Icon: FaTv, param: 'series', onClick: () => handleMediaClick('series') },
    { title: 'Movies', address: '/media/movies', Icon: FaFilm, param: 'movies', onClick: () => handleMediaClick('movies') }
  ]

  return (
    <>
      <div className={`fixed top-20 left-0 right-0 z-50 flex dark:bg-primary-light bg-secondary-light p-4 lg:text-lg justify-center gap-6 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-opacity-50 dark:bg-opacity-50 shadow-md' : ''}`}>
        <NavbarItem title="Trending" param="fetchTrending" onClick={handleNavItemClick} />
        <NavbarItem title="Top Rated" param="fetchTopRated" onClick={handleNavItemClick} />
        <DropdownMenu
          title="Watchlist"
          param="watchlist"
          items={watchlistItems}
          isOpen={openDropdown === 'My Collection'}
          onToggle={() => handleDropdownToggle('My Collection')}
        />
        <DropdownMenu
          title="Media"
          param="media"
          items={mediaItems}
          isOpen={openDropdown === 'Media'}
          onToggle={() => handleDropdownToggle('Media')}
        />
      </div>

      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-orange text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}

      {selectedMedia && (
        <div className="mt-24">
          <MediaSection
            category={selectedMedia.category}
          />
        </div>
      )}
    </>
  )
}