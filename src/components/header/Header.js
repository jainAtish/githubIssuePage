import React from 'react';
import  './Header.css';

import RepoDetail from '../commons/RepoDetail';
import NavigationItem from './NavigationItem';
import RepoLogoSVG from '../commons/svg/RepoLogoSVG';
// import { OWNER, REPO, WEB_URL } from '../../api/constants';

const navigationValues = [
  {
    name: 'Code', selected: false, 
  },
  {
    name: 'Issues', value: 253, selected: true,
  },
  {
    name: 'Pull Requests', value: 72, selected: false, 
  },
  {
    name: 'Projects', value: 2, selected: false, 
  },
  {
    name: 'Insights', selected: false,
  },
];





const Header = ({
  name,
  html_url,
  owner: { login, url }={},
  stargazers_count,
  notification,
  forks_count,
}={}) => (
  <nav className='container-nav'>
    <div className="nav-menu first">
      <div className="repo-title-info">
        <RepoLogoSVG />
       
        <a className='anchor' href={url}>{login}</a>
        <span className='path-divider'/>

        <a
          className='anchor'
          style={{fontWeight:"bold"}}
          href={html_url}
        >
          {name}
        </a>

      </div>
      <div className='right-nav'>
        <RepoDetail tag="Notification" value={notification} />
        <RepoDetail tag="Star" value={stargazers_count} />
        <RepoDetail tag="Fork" value={forks_count} />
      </div>
    </div>
  

    <div className="nav-menu" style={{justifyContent:'inherit'}}>
      {
        navigationValues.map(item => (
          <NavigationItem
            key={item.name}
            {...item}
          />
        ))
      }
   </div>
  </nav>
);

export default Header;


// Header.propTypes = {
//   name: PropTypes.string.isRequired,
//   html_url: PropTypes.string.isRequired,
//   owner: PropTypes.shape({
//     login: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//   }).isRequired,
//   stargazers_count: PropTypes.number.isRequired,
//   subscribers_count: PropTypes.number.isRequired,
//   forks_count: PropTypes.number.isRequired,
// };
