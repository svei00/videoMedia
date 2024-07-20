import React from 'react'
import {iconType} from 'react-icons'

export interface MenuItemProps {
  title: string,
  address: string,
  Icon: iconType
}

const MenuItem = ({title, address, Icon}: MenuItemProps): JSX.Element => {
  // const {title, address, Icon} = props
  return (
    <div>
        <Icon />
        <p>{title}</p>
    </div>
  )
}

export default MenuItem;
