'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface MenuItem {
  title: string;
  submenu?: MenuItem[];
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderMenuItem = (item: MenuItem, depth: number = 0) => (
    <div key={item.title} className={`pl-${depth * 4}`}>
      <Link href={`/${title.toLowerCase()}/${item.title.toLowerCase()}`} className="block px-4 py-2 text-sm hover:bg-primary-orange hover:text-white">
        {item.title}
      </Link>
      {item.submenu && (
        <div className="pl-4">
          {item.submenu.map(subItem => renderMenuItem(subItem, depth + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:font-bold focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg dark:bg-primary-light bg-secondary-light ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map(item => renderMenuItem(item))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;