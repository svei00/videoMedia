'use client'

import {useReducer, useState} from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {

  const [search, setSearch] = useState('')
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`)
      
  }

  return (
    <form className='flex justify-between px-5 max-w-auto' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Search Keywords'
            className='w-full h-14 rounded-md placeholder:text-primary-silver outline-none bg-transparent flex-1'
            onChange={(e) => setSearch(e.target.value)}
        />
        <button className='text-primary-orange font-semibold disabled:text-gray-400 disabled:cursor-not-allowed' disabled={search===""}>
            Search
        </button>

    </form>
  )
}
