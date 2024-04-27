import React from 'react';
import './css/Issue.css'
import { OWNER, REPO, WEB_URL } from '../../constant';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import { getDifference } from '../commons/getTimeDifference';
import Labels from './Labels';
import IssueAnchor from './IssueAnchor';


const Issue = ({
  issue: {
    title, number, created_at, user: { login }={}, labels,
  },
}) => (
  <div className='IssueWrapper'>
    <div className='IssueAnchorNTitleWrapper'>
      <div className='IssueOpenedIconWrapper'>
        <IssueOpenedSVG color="#28a745" />
      </div>
      <div className='IssueAnchorWithLabel'>
        <IssueAnchor to={`${number}`} color="#24292e" href={`${WEB_URL}/${OWNER}/${REPO}/issues/${number}`} title={title}/>
       
        <Labels labels={labels} />
      </div>
    </div>

    <div className='IssueOpenedBy'>
      <span>
#
        {number}
        {' '}

opened
        {' '}
        {getDifference(created_at)}
        {' '}
          ago by
        {' '}
        <a className='UserAnchor' href={`${WEB_URL}/${OWNER}/${REPO}/issues/created_by/${login}`}>
          {login}
        </a>
      </span>

    </div>
  </div>);

export default Issue;
