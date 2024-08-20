import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MediaSectionProps {
  category: 'series' | 'movies';
  subCategory?: 'year' | 'genre';
  value?: string | number;
}

const MediaSection: React.FC<MediaSectionProps> = ({ category, subCategory, value }) => {
  const [items, setItems] = useState([]);
  const [years, setYears] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (subCategory === 'year' && !value) {
        const yearsResponse = await fetch(`/api/media/${category}/years`);
        const yearsData = await yearsResponse.json();
        setYears(yearsData);
      } else if (subCategory === 'genre' && !value) {
        const genresResponse = await fetch(`/api/media/${category}/genres`);
        const genresData = await genresResponse.json();
        setGenres(genresData);
      } else {
        let url = `/api/media/${category}`;
        if (subCategory && value) {
          url += `/${subCategory}/${value}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      }
    };

    fetchData();
  }, [category, subCategory, value]);

  if (subCategory === 'year' && !value) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {years.map((year) => (
          <Link key={year} href={`/media/${category}/year/${year}`}>
            <div className="p-2 bg-secondary-light dark:bg-primary-light rounded">{year}</div>
          </Link>
        ))}
      </div>
    );
  }

  if (subCategory === 'genre' && !value) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {genres.map((genre) => (
          <Link key={genre.id} href={`/media/${category}/genre/${genre.id}`}>
            <div className="p-2 bg-secondary-light dark:bg-primary-light rounded">{genre.name}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Link key={item.id} href={`/movie/${item.id}`}>
          <div className="p-2 bg-secondary-light dark:bg-primary-light rounded">
            <h3>{item.title || item.name}</h3>
            <p>{item.release_date || item.first_air_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MediaSection;