import React from 'react'

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
  }

  interface ResultsProps {
    results: Movie[];
  }

const Results = ({results}: ResultsProps): JSX.Element => {
  return (
    <div>
      {results.map((result) => (
    <div key={result.id}>
        <h2>{result.original_title}</h2> 
    </div>
))}
    </div>
  )
}

export default Results