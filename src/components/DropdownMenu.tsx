'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import NavbarItem from './NavbarItem'
import { useRouter } from 'next/navigation'

interface MenuItem {
  title: string;
  param: string;
  submenu?: MenuItem[];
}

interface DropdownMenuProps {
  title: string;
  param: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, param, items, isOpen, onToggle }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleItemClick = (itemParam: string) => {
    router.push(`/${itemParam}`);
    onToggle(); // Close the dropdown after navigation
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => (
    <div key={item.title} className={`pl-${depth * 4}`}>
      <button 
        onClick={() => handleItemClick(item.param)}
        className={`block w-full text-left px-4 py-2 text-sm hover:bg-primary-orange hover:text-white ${depth === 0 ? 'font-semibold' : ''}`}
      >
        {item.title}
      </button>
      {item.submenu && (
        <div className="pl-4">
          {item.submenu.map(subItem => renderMenuItem(subItem, depth + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <NavbarItem title={title} param={param} onClick={onToggle} />
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