import React from 'react';
import './App.css'
// import 'normalize.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import SubNav from './components/search-subnav/SubNav';
import HeaderContainer from './components/header/Header';
import IssuesTable from './components/issues-table/IssuesTable';



const App = () => {
 
  const headerData={
    name:"atishay/github-issue-page",
    html_url:"www.example.com",
    owner: { login:"xxx@yyyy.com", url:"www.example.com" },
    stargazers_count:"175k",
    notification:1000,
    forks_count:"35.3k",
  }


  return (
    <div className='app-container'>
      <HeaderContainer {...headerData}/>
      <div className='IssueListingContainer'>
        <SubNav/>
        <Router>
          <Routes>
            <Route exact path="/" component={IssuesTable} />
          
            <Route path="*" element={<IssuesTable/>} />
          </Routes>
        </Router>
    

      </div>
    </div>
  )
}
export default App;