'use client'

import {useState, FormEvent, ChangeEvent} from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox(): JSX.Element {

  const [search, setSearch] = useState<string>('')
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    router.push(`/search/${search}`)
      
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  } 

  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Search Keywords'
            className='w-full h-14 rounded-md placeholder:text-primary-silver outline-none bg-transparent flex-1'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
        />
        <button className='text-primary-orange font-semibold disabled:text-gray-400 disabled:cursor-not-allowed' disabled={search===""}>
            Search
        </button>

    </form>
  )
}
