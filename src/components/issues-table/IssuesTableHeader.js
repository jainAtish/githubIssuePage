import React from 'react';
import './css/IssuesTableHeader.css'
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import CompletedSVG from '../commons/svg/CompletedSVG';
import Caret from '../commons/Caret';
import { OWNER, REPO, WEB_URL } from '../../constant';

const otherValues = ['Auther', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

const OtherDetail = ({ value }) => (
  <span className='DetailSpan'>
    {value}
    {' '}
    <Caret />
    {' '}
  </span>
);


const IssuesTableHeader = () => (
  <div className='IssuesTableHeaderContainer'>
    <div className='OpenClosedIssueDetails'>
      <a
        selected
        href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
      >
        <IssueOpenedSVG />
            253 Open
      </a>
      <a
        style={{ marginLeft: '10px' }}
        href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
      >
        <CompletedSVG color="#586069" hoverColor="#24292e" />
            6378 closed
      </a>
    </div>
    <div className='OtherDetails'>
      {otherValues?.map(value => <OtherDetail key={value} value={value} />)}
    </div>
  </div>
);

export default IssuesTableHeader;



