import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

// Styled container for the problem list
const ProblemListContainer = styled.div`
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  max-width: 800px;
  margin: 1rem auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// Styled component for each problem item
const ProblemItem = styled.div`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

// Styled button for solving and adding problems
const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Styled component for the difficulty tag
const DifficultyTag = styled.span`
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #ffffff;
  background-color: ${(props) => {
    switch (props.level) {
      case 'Easy':
        return '#5cb85c'; // Soft green for easy
      case 'Medium':
        return '#f0ad4e'; // Vibrant orange for medium
      case 'Hard':
        return '#d9534f'; // Bright red for hard
      default:
        return '#6c757d'; // Gray for undefined
    }
  }};
  margin-left: 1rem;
`;


const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/problems');
        setProblems(response.data);
      } catch (error) {
        console.error('Error fetching problems', error);
      }
    };

    fetchProblems();
  }, []);

  const handleSolve = (id) => {
    alert(`Solving problem with id: ${id}`);
  };

  return (
    <ProblemListContainer>
      {problems.map((problem) => (
        <ProblemItem key={problem._id}>
          <div>
            <h2>
              {problem.title}
              <DifficultyTag level={problem.difficulty}>
                {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
              </DifficultyTag>
            </h2>
            <p>{problem.description}</p>
          </div>
          <div>
            <Button onClick={() => handleSolve(problem._id)}>Solve</Button>
          </div>
        </ProblemItem>
      ))}
    </ProblemListContainer>
  );
};

export default ProblemList;
