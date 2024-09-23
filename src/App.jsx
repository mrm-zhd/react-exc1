import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import Home from './components/common/pages/Home.jsx';
import Routes from './Routes.jsx';


function App() {
    
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
