import React from 'react';
import './css/RepoDetail.css'

import WatchSVG from './svg/WatchSVG';
import StarSVG from './svg/StarSVG';
import ForkSVG from './svg/ForkSVG';



const RepoDetail = ({ tag, value }) => (
  <div className='repo-detail-container'>
    <span className='repo-detail-tagContainer'>
      { tag === 'Notification' && <WatchSVG /> }
      { tag === 'Star' && <StarSVG /> }
      { tag === 'Fork' && <ForkSVG /> }

      {tag}
     <span className='caret'/>
    </span>
    <span className='repo-detail-value-container'>{value}</span>
  </div>
);


export default RepoDetail;
