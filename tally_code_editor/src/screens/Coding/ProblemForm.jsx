import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled components for enhanced UI
const FormContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background: #ffffff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #4cc9f0;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #55a630;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 14px;
  margin-top: 10px;
`;

// ProblemForm Component
const ProblemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [constraints, setConstraints] = useState('');
  const [inputExample, setInputExample] = useState('');
  const [outputExample, setOutputExample] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const newProblem = {
      title,
      description,
      constraints,
      inputExample,
      outputExample,
      difficulty,
    };

    try {
      await axios.post('http://localhost:5000/api/problems', newProblem);
      alert('Problem added successfully');
      setTitle('');
      setDescription('');
      setConstraints('');
      setInputExample('');
      setOutputExample('');
      setDifficulty('Easy');
    } catch (error) {
      setError('Error adding problem. Please try again.');
      console.error('Error adding problem', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Create New Problem</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="constraints">Constraints</Label>
          <TextArea
            id="constraints"
            value={constraints}
            onChange={(e) => setConstraints(e.target.value)}
            rows="3"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="inputExample">Input Example</Label>
          <TextArea
            id="inputExample"
            value={inputExample}
            onChange={(e) => setInputExample(e.target.value)}
            rows="3"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="outputExample">Output Example</Label>
          <TextArea
            id="outputExample"
            value={outputExample}
            onChange={(e) => setOutputExample(e.target.value)}
            rows="3"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="difficulty" >Difficulty Level</Label>
          <Select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Select>
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Problem'}
        </Button>
      </form>
    </FormContainer>
  );
};

export default ProblemForm;
