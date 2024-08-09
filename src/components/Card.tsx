'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

interface ResultProps {
    id: number;
    backdrop_path?: string;
    poster_path?: string;
    title?: string;
    name?: string;
    overview: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: number;
}

interface CardProps {
    result: ResultProps;
}

export default function Card({result}: CardProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const url = `https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`;
        const res = await fetch(url, { method: 'HEAD' });
        if (!res.ok) throw new Error('Failed to load image');
        setImageUrl(url);
      } catch (err) {
        setError('Failed to load image');
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [result.backdrop_path, result.poster_path]);

  if (isLoading) return <div className="animate-pulse bg-gray-300 h-48 w-full rounded-lg"></div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className='group cursor-pointer sm:hover:shadow-primary-gold sm-shadow-md rounded-lg sm:border-primary-gold sm:border-2 sm:p-2 sm:rounded-lg sm:shadow-lg sm:shadow-primary-gold sm:shadow-md sm:hover:shadow-primary-gold sm:m-2 sm:hover:shadow-md sm:hover:scale-105 transition-all duration-300 ease-in-out'>
      <Link href={`/movie/${result.id}`}>
        {imageUrl && (
          <Image 
            src={imageUrl}
            alt={result.title || 'Image'}
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-all duration-300 ease-in-out"
            loading="lazy"
          />
        )}
        <div className='p-2'>
          <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
          <p className='line-clamp-2 text-md text-justify'>{result.overview}</p>
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