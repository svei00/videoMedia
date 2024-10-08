import React from 'react'
import Card from './Card';

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    video: boolean;
    adult: boolean;
    media_type?: 'movie' | 'tv';
    name?: string;
    first_air_date?: string;
}

interface ResultsProps {
    results: Movie[];
}

const Results = ({results}: ResultsProps): JSX.Element => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <div key={result.id}>
            <Card key={result.id} result={result} />
        </div>
      ))}
    </div>
  )
}

export default Results