'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';

interface NavbarItemProps {
    title: string;
    param: string;
}

const NavbarItem = ({ title, param }: NavbarItemProps): JSX.Element => {
  
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link 
        className={`hover:font-bold ${genre === param ? 'font-bold underline underline-offset-8 decoration-4 decoration-primary-orange rounded-lg' : ''}`} 
        href={`/?genre=${param}`}
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