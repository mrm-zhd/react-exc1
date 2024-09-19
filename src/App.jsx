import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import home from './components/common/pages/home';


function App() {
    
  return (
    <>
      <BrowserRouter>
        <routes>
          <Link to={'home'}>go home</Link>
        </routes>
      </BrowserRouter>
    </>
  );
}

export default App;
