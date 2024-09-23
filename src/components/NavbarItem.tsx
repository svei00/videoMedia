'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';

interface NavbarItemProps {
    title: string;
    param: string;
    onClick?: () => void;
}

const NavbarItem = ({ title, param, onClick }: NavbarItemProps): JSX.Element => {
  
  const searchParams = useSearchParams();
  const genre = searchParams?.get('genre') ?? null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <Link 
        className={`hover:font-bold ${genre === param ? 'font-bold underline underline-offset-8 decoration-4 decoration-primary-orange rounded-lg' : ''}`} 
        href={`/?genre=${param}`}
        onClick={handleClick}
      >
        {title}
      </Link>
    </div>
  )
}

const NavbarItemWrapper = (props: NavbarItemProps): JSX.Element => (
  <Suspense fallback={<div>Loading...</div>}>
    <NavbarItem {...props} />
  </Suspense>
);

export default NavbarItemWrapper;