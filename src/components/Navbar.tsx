'use client'

'use client'

import React, { useState, useEffect } from 'react'
import NavbarItem from './NavbarItem'
import DropdownMenu from './DropdownMenu'
import { FaArrowUp } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <>
      <div className={`fixed top-20 left-0 right-0 z-50 flex dark:bg-primary-light bg-secondary-light p-4 lg:text-lg justify-center gap-6 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-opacity-50 dark:bg-opacity-50 shadow-md' : ''}`}>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
        <DropdownMenu title="My Collection" items={[
          { title: 'Series', submenu: [
            { title: 'Year' },
            { title: 'Genre', submenu: [] } // We'll populate this later
          ]},
          { title: 'Movies', submenu: [
            { title: 'Year' },
            { title: 'Genre', submenu: [] } // We'll populate this later
          ]}
        ]} />
        <DropdownMenu title="Media" items={[
          { title: 'Series', submenu: [
            { title: 'Year' },
            { title: 'Genre', submenu: [] } // We'll populate this later
          ]},
          { title: 'Movies', submenu: [
            { title: 'Year' },
            { title: 'Genre', submenu: [] } // We'll populate this later
          ]}
        ]} />
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