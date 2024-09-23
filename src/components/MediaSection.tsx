import React from 'react';

export interface MediaSectionProps {
  category: 'series' | 'movies';
  filterType?: 'year' | 'genre';
  filterValue?: string | number;
}

const MediaSection: React.FC<MediaSectionProps> = ({ category, filterType, filterValue }) => {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
      <h2 className="text-xl font-bold mb-2">Under Construction</h2>
      <p>We're working on bringing you the best {category} content filtered by {filterType || 'various criteria'}.</p>
      <p>Please check back later!</p>
    </div>
  );
};

export default MediaSection;