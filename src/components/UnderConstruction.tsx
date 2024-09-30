import React from 'react';

interface UnderConstructionProps {
  pageName: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageName }) => {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
      <h2 className="text-xl font-bold mb-2">Under Construction</h2>
      <p>The {pageName} page is under construction.</p>
      <p>Please check back later!</p>
    </div>
  );
};

export default UnderConstruction;