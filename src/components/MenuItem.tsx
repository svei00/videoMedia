import Link from 'next/link'
import React from 'react'
import {IconType} from 'react-icons'

export interface MenuItemProps {
  title: string,
  address: string,
  Icon: IconType,
  onClick?: () => void,
  submenu?: MenuItemProps[]
}

const MenuItem: React.FC<MenuItemProps> = ({title, address, Icon, onClick, submenu}) => {
  return (
    <div className="relative group">
      <Link href={address} className='hover:text-primary-light flex items-center' onClick={onClick}>
        <Icon className="text-2xl sm:hidden"/>
        <p className='capitalize hidden sm:inline text-sm font-semibold'>{title}</p>
      </Link>
      {submenu && submenu.length > 0 && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
          {submenu.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuItem;