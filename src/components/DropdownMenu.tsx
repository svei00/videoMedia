'use client'

import React, { useState } from 'react'
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

  const renderMenuItem = (item: MenuItem, depth: number = 0) => (
    <div key={item.title} className={`pl-${depth * 4}`}>
      <Link href={`/${title.toLowerCase()}/${item.title.toLowerCase()}`}>
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
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:font-bold focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map(item => renderMenuItem(item))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;