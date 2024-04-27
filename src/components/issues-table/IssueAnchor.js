import React from 'react';
import { Link } from 'react-router-dom';
import './css/IssueAnchor.css';

const IssueAnchor = ({title,...restProps}) => {
  return (
    <Link {...restProps} className="IssueAnchor">
    {' '}
    {title}</Link>
  );
};

export default IssueAnchor;
