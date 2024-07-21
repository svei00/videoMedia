import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

interface HeaderProps {


}

const Header = ({}:HeaderProps): JSX.Element => {
  
    return (
        <div>
          <div className='flex gap-4'>
            <MenuItem title="home" address="/" Icon={AiFillHome} />
            <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
          </div>
    
          <div className=''>
            {/* Empty div */}
          </div>
        </div>
      );
    };
    
    export default Header;