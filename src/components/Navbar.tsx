'use client'

import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import DropdownMenu from './DropdownMenu'
import { FaArrowUp, FaFilm, FaTv, FaCalendarAlt, FaTheaterMasks } from 'react-icons/fa'
import { MenuItemProps } from './MenuItem'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const router = useRouter()

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

  const handleMediaClick = (category: 'watchlist' | 'media', filterType?: 'year' | 'genre', filterValue?: string) => {
    const query = new URLSearchParams({ category, ...(filterType && { filterType }), ...(filterValue && { filterValue }) })
    router.push(`/?${query.toString()}`)
    setOpenDropdown(null)
  }

  const watchlistItems: MenuItemProps[] = [
    { 
      title: 'Series', 
      address: '/?category=watchlist&filterType=series', 
      Icon: FaTv,
      param: 'series',
      onClick: () => handleMediaClick('watchlist', 'series'),
      submenu: [
        { title: 'Year', address: '/?category=watchlist&filterType=year&filterValue=series', Icon: FaCalendarAlt, param: 'year', onClick: () => handleMediaClick('watchlist', 'year', 'series') },
        { title: 'Genre', address: '/?category=watchlist&filterType=genre&filterValue=series', Icon: FaTheaterMasks, param: 'genre', onClick: () => handleMediaClick('watchlist', 'genre', 'series') }
      ]
    },
    { 
      title: 'Movies', 
      address: '/?category=watchlist&filterType=movies', 
      Icon: FaFilm,
      param: 'movies',
      onClick: () => handleMediaClick('watchlist', 'movies'),
      submenu: [
        { title: 'Year', address: '/?category=watchlist&filterType=year&filterValue=movies', Icon: FaCalendarAlt, param: 'year', onClick: () => handleMediaClick('watchlist', 'year', 'movies') },
        { title: 'Genre', address: '/?category=watchlist&filterType=genre&filterValue=movies', Icon: FaTheaterMasks, param: 'genre', onClick: () => handleMediaClick('watchlist', 'genre', 'movies') }
      ]
    }
  ]

  const mediaItems: MenuItemProps[] = [
    { 
      title: 'Series', 
      address: '/?category=media&filterType=series', 
      Icon: FaTv,
      param: 'series',
      onClick: () => handleMediaClick('media', 'series'),
      submenu: [
        { title: 'Year', address: '/?category=media&filterType=year&filterValue=series', Icon: FaCalendarAlt, param: 'year', onClick: () => handleMediaClick('media', 'year', 'series') },
        { title: 'Genre', address: '/?category=media&filterType=genre&filterValue=series', Icon: FaTheaterMasks, param: 'genre', onClick: () => handleMediaClick('media', 'genre', 'series') }
      ]
    },
    { 
      title: 'Movies', 
      address: '/?category=media&filterType=movies', 
      Icon: FaFilm,
      param: 'movies',
      onClick: () => handleMediaClick('media', 'movies'),
      submenu: [
        { title: 'Year', address: '/?category=media&filterType=year&filterValue=movies', Icon: FaCalendarAlt, param: 'year', onClick: () => handleMediaClick('media', 'year', 'movies') },
        { title: 'Genre', address: '/?category=media&filterType=genre&filterValue=movies', Icon: FaTheaterMasks, param: 'genre', onClick: () => handleMediaClick('media', 'genre', 'movies') }
      ]
    }
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
          isOpen={openDropdown === 'Watchlist'}
          onToggle={() => handleDropdownToggle('Watchlist')}
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
    </>
  )
}