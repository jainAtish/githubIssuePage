import React from 'react';
import './css/SVG.css'

const CompletedSVG = ({ color, hoverColor }) => (
  <svg className='common-svg' color={color}  selected width="12" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
    />
  </svg>
);

export default CompletedSVG;
