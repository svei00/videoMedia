import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MediaSectionProps {
  category: 'series' | 'movies';
}

const MediaSection: React.FC<MediaSectionProps> = ({ category }) => {
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [movies, setMovies] = useState<any[]>([]);
  const [showYears, setShowYears] = useState(false);

  useEffect(() => {
    fetchYears();
  }, []);

  useEffect(() => {
    if (selectedYear) {
      fetchMovies(selectedYear);
    }
  }, [selectedYear]);

  const fetchYears = async () => {
    try {
      const response = await fetch('/api/years');
      const data = await response.json();
      setYears(data);
    } catch (error) {
      console.error('Failed to fetch years:', error);
    }
  };

  const fetchMovies = async (year: number) => {
    try {
      const response = await fetch(`/api/${category}/${year}?type=year`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  return (
    <div>
      <div 
        onMouseEnter={() => setShowYears(true)}
        onMouseLeave={() => setShowYears(false)}
        onClick={() => setShowYears(!showYears)}
        className="cursor-pointer p-2 bg-secondary-light dark:bg-primary-light rounded"
      >
        Year
      </div>
      {showYears && (
        <div className="grid grid-cols-4 gap-4 mt-2">
          {years.map((year) => (
            <div 
              key={year}
              onClick={() => setSelectedYear(year)}
              className="p-2 bg-secondary-light dark:bg-primary-light rounded cursor-pointer"
            >
              {year}
            </div>
          ))}
        </div>
      )}
      {selectedYear && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Movies from {selectedYear}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="p-2 bg-secondary-light dark:bg-primary-light rounded">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaSection;