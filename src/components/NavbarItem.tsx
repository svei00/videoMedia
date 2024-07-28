'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface NavbarItemProps {
    title: string,
    params: string
}

const NavbarItem = ({title, param}): JSX.Element => {
  
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

export default NavbarItem