import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({result}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-primary-gold sm-shadow-md rounded-lg sm:border-primary-gold sm:border-2 sm:p-2 sm:rounded-lg sm:shadow-lg sm:shadow-primary-gold sm:shadow-md sm:hover:shadow-primary-gold sm:m-2 sm:hover:shadow-md sm:hover:scale-105 transition-all duration-300 ease-in-out'>
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path}`} alt={result.title}
                width={500}
                height={300}
                className="sm:rounded-t-lg group-hover:opacity-75 transition-all duration-300 ease-in-out"
                ></Image>
                <div className='p-2'>
                    <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2> {/* The truncate is to add three dots ... if text is larger than 2 rows */} 
                    <p className='line-clamp-2 text-md text-justify'>{result.overview}</p> {/* Line clamp is to show, in this case, the first two lines */}
                    <p className='flex items-center'>
                        {result.release_date || result.first_air_date} 
                        <FiThumbsUp className='h-5 mr-1 ml-3 text-tertiary-light'/>
                        {result.vote_count}
                    </p>
                </div>
        </Link> 
    </div>
  )
}
