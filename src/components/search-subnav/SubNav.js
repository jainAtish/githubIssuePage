import React from 'react';
import './css/SubNav.css'
import Caret from '../commons/Caret';
import Input from './Input';
import FiltersContainer from './FiltersContainer';
import Detail from '../commons/Detail';
import SearchSVG from '../commons/svg/SearchSVG';
import CreateNewIssueButton from './CreateNewIssueButton';
import { OWNER, REPO, WEB_URL } from '../../constant';


const SubNav = () => (
  <div className='SubNavContainer'>
    <div className='FilterNSearchContainer'>
      <div>
        <FiltersContainer>
          Filters
          <Caret />
        </FiltersContainer>
        <div className='SearchContainer'>
          <Input type="text" defaultValue="is:issue is:open " />
          <SearchSVG />
        </div>
      </div>

      

    </div>
    <div style={{ display: "flex",alignItems: "center"}}>
      <Detail
          tag="Labels"
          value="Milestones"
          tagBackgroundColor="#ffffff"
          valueBackgroundColor="#ffffff"
          tagPadding="9px 14px"
          valuePadding="9px 14px"
          tagHref={`${WEB_URL}/${OWNER}/${REPO}/labels`}
          valueHref={`${WEB_URL}/${OWNER}/${REPO}/milestones`}
        />
        <CreateNewIssueButton
        href={`${WEB_URL}/${OWNER}/${REPO}/issues/new`}
      >
        New issue
      </CreateNewIssueButton>
    </div>

   

  </div>
);

export default SubNav;
