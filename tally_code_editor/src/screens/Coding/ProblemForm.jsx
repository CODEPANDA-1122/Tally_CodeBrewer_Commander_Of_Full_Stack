import React, { useState } from 'react';
import axios from 'axios';

const ProblemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [constraints, setConstraints] = useState('');
  const [testCases, setTestCases] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const problem = { title, description, constraints, testCases: testCases.split('\n').map(testCase => ({ input: testCase, output: '' })) };
    try {
      await axios.post('/api/problems', problem);
      // Clear form or handle success
    } catch (error) {
      console.error('Error creating problem:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Constraints:
        <input type="text" value={constraints} onChange={(e) => setConstraints(e.target.value)} />
      </label>
      <label>
        Test Cases (one per line):
        <textarea value={testCases} onChange={(e) => setTestCases(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProblemForm;
