import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MediaSectionProps {
  category: 'series' | 'movies';
}

const MediaSection: React.FC<MediaSectionProps> = ({ category }) => {
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [media, setMedia] = useState<any[]>([]);
  const [showYears, setShowYears] = useState(false);

  useEffect(() => {
    fetchYears();
  }, []);

  useEffect(() => {
    if (selectedYear) {
      fetchMedia(selectedYear);
    }
  }, [selectedYear, category]);

  const fetchYears = async () => {
    try {
      const response = await fetch('/api/years');
      const data = await response.json();
      setYears(data.slice(0, 7)); // Get only the last 7 years
    } catch (error) {
      console.error('Failed to fetch years:', error);
    }
  };

  const fetchMedia = async (year: number) => {
    try {
      const response = await fetch(`/api/${category}/${year}?type=year`);
      const data = await response.json();
      setMedia(data);
    } catch (error) {
      console.error(`Failed to fetch ${category}:`, error);
    }
  };

  return (
    <div className="relative">
      <div 
        onMouseEnter={() => setShowYears(true)}
        onMouseLeave={() => setShowYears(false)}
        className="cursor-pointer p-2 bg-secondary-light dark:bg-primary-light rounded"
      >
        Year
      </div>
      {showYears && (
        <div className="absolute z-10 mt-2 bg-white dark:bg-gray-800 rounded shadow-lg">
          {years.map((year) => (
            <div 
              key={year}
              onClick={() => setSelectedYear(year)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
            >
              {year}
            </div>
          ))}
        </div>
      )}
      {selectedYear && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">{category === 'movies' ? 'Movies' : 'Series'} from {selectedYear}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {media.map((item) => (
              <div key={item.id} className="p-2 bg-secondary-light dark:bg-primary-light rounded">
                <h3>{item.title || item.name}</h3>
                <p>{item.release_date || item.first_air_date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaSection;