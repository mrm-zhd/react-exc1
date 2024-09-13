import React,{useState} from 'react';

export default function ShowForm() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = '';
        const nameVal = setName()


    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
        <input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div><button type='submit' onClick={handleSubmit}>Submit Form</button></div>
      </form>
    );
  }