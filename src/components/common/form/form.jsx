import React,{useState} from 'react';
import Input from './input.jsx';

export default function ShowForm() {
    const [name, setName] = useState([]);
    const [password, setPassword] = useState([]);
    const [showResult, setShowResult] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResult(!showResult);
    }
    return (
      <>
        <form  className="flex flex-col gap-4 w-2/3">
          <Input type='text' placeholder='your name..' handleChange={setName}/>
          <Input type='password' placeholder='your pass..' handleChange={setPassword}/>
          <button onClick={handleSubmit} className="bg-green-600 rounded-md p-3 text-white">Submit Form</button>
        </form>
          <div>
          {showResult === true && (
            <ul>
              <li>username : {name}</li>
              <li>password: {password}</li>
            </ul>
          )}
        </div>
      </>
    );
  }