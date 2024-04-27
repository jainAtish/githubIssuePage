import React from 'react';
import './css/Labels.css'


const Labels = ({ labels }) => (
  <span className='LabelsWrapper'>
    {
      labels?.map(({ id, color, name }) => (
        <span
         className='Label'
          key={id}
          style={{color:`#${color}`}}
        >
          {name}
        </span>
      ))
    }
  </span>
);

export default Labels;

