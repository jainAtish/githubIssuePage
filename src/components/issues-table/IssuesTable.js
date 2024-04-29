import React,{useEffect, useState} from 'react';
import IssuesTableHeader from './IssuesTableHeader';
import IssuesContainer from './IssuesContainer';



const IssuesTable = () => {

  const [issueList,setIssueList]=useState([])

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = () => {
    fetch(`https://api.github.com/repos/facebook/react/issues`)
      .then(response => response.json())
      .then(data => {
        setIssueList(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  };
  
    return(
      <div style={{marginBottom : "20px"}} >
        <IssuesTableHeader />
        <IssuesContainer issueList={issueList} />
      </div>
    )
}

export default IssuesTable;
