import React, { useEffect, useState, useRef } from 'react';
import Issue from './Issue';

const IssuesContainer = ({ issueList }) => {
  const [page, setPage] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('list-container');
      if (!container) return;

      const scrollPosition = container.scrollTop + container.clientHeight;
      const totalHeight = container.scrollHeight;

      
      const threshold = 100; 

      if (totalHeight - scrollPosition < threshold) {
        setPage(prevPage => prevPage + 1);
      }
    };

    const container = document.getElementById('list-container');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
   
    const newData = issueList.slice(page * 10, (page + 1) * 10);
    setCurrentData(prevData => [...prevData, ...newData]);
  }, [page, issueList]);

  return (
    <div>
      <div id="list-container" style={{ height: '600px', overflowY: 'auto', border: '1px solid #e1e4e8', borderCollapse: "collapse" }}>
        {currentData.map(issue => <Issue key={issue.id} issue={issue} />)}
       
        <div ref={sentinelRef}></div>
      </div>
      
    </div>
  );
}

export default IssuesContainer;