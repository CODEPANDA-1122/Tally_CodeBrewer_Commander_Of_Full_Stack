import React from 'react';
import styled from 'styled-components';

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

// Default problem data
const defaultProblems = [
    { id: 1, title: "Two Sum", description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target." },
    { id: 2, title: "Add Two Numbers", description: "Add two numbers represented by linked lists and return it as a linked list." },
    { id: 3, title: "Longest Substring Without Repeating Characters", description: "Find the length of the longest substring without repeating characters." },
    { id: 4, title: "Median of Two Sorted Arrays", description: "Find the median of two sorted arrays." },
    { id: 5, title: "Longest Palindromic Substring", description: "Find the longest palindromic substring in a given string." },
    { id: 6, title: "Zigzag Conversion", description: "Convert a string to a zigzag pattern on a given number of rows." },
    { id: 7, title: "Reverse Integer", description: "Reverse digits of an integer." },
    { id: 8, title: "String to Integer (atoi)", description: "Implement the `atoi` function which converts a string to an integer." },
    { id: 9, title: "Palindrome Number", description: "Determine whether an integer is a palindrome." },
    { id: 10, title: "Regular Expression Matching", description: "Implement regular expression matching with support for `.` and `*`." }
];

const ProblemList = () => {
    // Handler for solving a problem
    const handleSolve = (id) => {
        alert(`Solving problem with id: ${id}`);
    };

    // Handler for adding a new problem
    const handleAddNew = () => {
        alert('Add New Problem functionality');
    };

    return (
        <ProblemListContainer>
            {defaultProblems.map(problem => (
                <ProblemItem key={problem.id}>
                    <div>
                        <h2>{problem.title}</h2>
                        <p>{problem.description}</p>
                    </div>
                    <div>
                        <Button onClick={() => handleSolve(problem.id)}>Solve</Button>
                    </div>
                </ProblemItem>
            ))}
            
        </ProblemListContainer>
    );
}

export default ProblemList;
