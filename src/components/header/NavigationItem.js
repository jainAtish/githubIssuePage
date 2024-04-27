
import React from 'react';
import './NavigationItem.css'
import CodeSVG from '../commons/svg/CodeSVG';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import PrSVG from '../commons/svg/PrSVG';
import ProjectSVG from '../commons/svg/ProjectSVG';
import InsightsSVG from '../commons/svg/InsightsSVG';


const NavigationItem = ({
  name, selected, value, url,
}) => {
  const className = `NavigationItemWrapper ${selected ? 'selected' : ''}`;
  return (
  <div className={className}>
    {name === 'Code' && <CodeSVG /> }
    {name === 'Issues' && <IssueOpenedSVG selected />}
    {name === 'Pull Requests' && <PrSVG />}
    {name === 'Projects' && <ProjectSVG />}
    {name === 'Insights' && <InsightsSVG />}
    <a className="NavigationItemAnchor" href={url}>{name}</a>
    { value
      ? <span className='NavigationItemValue'>{value}</span>
      : <span >{value}</span>
    }
  </div>
);}

export default NavigationItem;


