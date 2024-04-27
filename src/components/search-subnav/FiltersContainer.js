import React from 'react';
import './css/FilterContainer.css';

const FiltersContainer = ({children}) => {
  return (
    <div className="FiltersContainer">
     {children}
    </div>
  );
};

export default FiltersContainer;
