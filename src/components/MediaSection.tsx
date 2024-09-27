import React from 'react';

export interface MediaSectionProps {
  category: 'series' | 'movies';
}

const MediaSection: React.FC<MediaSectionProps> = ({ category }) => {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
      <h2 className="text-xl font-bold mb-2">Under Construction</h2>
      <p>We're working on bringing you the best {category} content.</p>
      <p>Please check back later!</p>
    </div>
  );
};

export default MediaSection;