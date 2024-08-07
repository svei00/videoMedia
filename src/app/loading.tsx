import Image from 'next/image'
import React from 'react'

export default function Loading(): JSX.Element {
  
  return (
    <div className='flex justify-center mt-16'>
      <Image className='h-48' src='/loading.svg' alt='Loading...' width={192} height={192} />
    </div>
  );
}
