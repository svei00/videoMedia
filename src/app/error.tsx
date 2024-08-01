'use client'

import {useEffect} from 'react'

interface errorProps {
  error: Error;
  reset: () => void;
}

export default function error({error, reset}: errorProps) {

    useEffect(() => {
        console.log(error)
    }, [error]);

  return (
    <div className='text-center mt-10'>
        <h1>Something Went Wrong, Please Try Again Later.</h1>
        <button className='hover:text-primary-Default' onClick={() => reset()}>
            Try Again, Please.
        </button>
    </div>
  )
}
