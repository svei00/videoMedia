import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

interface HeaderProps {


}

const Header = ({}:HeaderProps): JSX.Element => {
  
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
          <div className='flex gap-4'>
            <MenuItem title="home" address="/" Icon={AiFillHome} />
            <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
          </div>
          <div className=''>
           <DarkModeSwitch/>
          <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl text-primary-text font bold bg bg-primary-light hover:bg-secondary-light py-1 px-2 rounded-lg'>VideoMedia</span>
            <span className='text-xl hidden sm:inline mt-4 mr-4 mb-4 border-t-4 border-r-4 border-b-4 border-primary-orange rounded-tr-md rounded-br-md overflow-x-visible -ml-pxtext-xl hidden sm:inline mt-4 mr-6 mb-4 border-t-4 border-r-4 border-b-4 border-primary-orange rounded-tr-md rounded-br-md overflow-x-visible -ml-1.5 pl-1 pr-2'>Collection</span>
          </Link>
          </div>
        
        </div>
      );
    };
    
    export default Header;