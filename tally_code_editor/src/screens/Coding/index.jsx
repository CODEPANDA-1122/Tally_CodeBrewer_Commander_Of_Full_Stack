import React, { useEffect,useState } from 'react'
import ProblemForm from './ProblemForm';
import ProblemList from './ProblemList';
const Coding = () => {
 
  const [message, setMessage] = useState('Hello, welcome to my site!');

  const handleClick = () => {
    setMessage('Thanks for clicking the button!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me</button>
       <ProblemForm />
      <ProblemList />
    </div>
  );
}

export default Coding