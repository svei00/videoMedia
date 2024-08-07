import Link from 'next/link'
import React from 'react'
import {IconType} from 'react-icons'

export interface MenuItemProps {
  title: string,
  address: string,
  Icon: IconType
}

const MenuItem = ({title, address, Icon}: MenuItemProps): JSX.Element => {
  // const {title, address, Icon} = props
  return (
    <Link href={address} className='hover:text-purple-600'>
        <Icon className="text-2xl sm:hidden"/>
        <p className='capitalize hidden sm:inline text-sm font-semibold'>{title}</p>
    </Link>
  )
}

export default MenuItem;
