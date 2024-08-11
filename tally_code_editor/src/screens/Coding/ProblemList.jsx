import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('/api/problems')
      .then(response => setProblems(response.data))
      .catch(error => console.error('Error fetching problems:', error));
  }, []);

  return (
    <div>
      <h2>Problem List</h2>
      <ul>
        {problems.map(problem => (
          <li key={problem._id}>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
            <p><strong>Constraints:</strong> {problem.constraints}</p>
            <div>
              <h4>Test Cases</h4>
              <ul>
                {problem.testCases.map((testCase, index) => (
                  <li key={index}>
                    <p><strong>Input:</strong> {testCase.input}</p>
                    <p><strong>Output:</strong> {testCase.output}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
