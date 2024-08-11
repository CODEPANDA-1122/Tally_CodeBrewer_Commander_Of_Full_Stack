// ProblemForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #0077b6;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #005f8c;
  }
`;

const ProblemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [constraints, setConstraints] = useState('');
  const [inputExample, setInputExample] = useState('');
  const [outputExample, setOutputExample] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      title,
      description,
      constraints,
      inputExample,
      outputExample,
      difficulty,
    });
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
          <Label htmlFor="difficulty">Difficulty Level</Label>
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

        <Button type="submit">Submit Problem</Button>
      </form>
    </FormContainer>
  );
};

export default ProblemForm;
