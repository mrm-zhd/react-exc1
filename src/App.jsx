import { BrowserRouter} from 'react-router-dom';
import './App.css';
// import Home from './components/common/pages/Home.jsx';
import MainLayout from './components/common/layout/MainLayout.jsx';


function App() {
    
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          {/* <Routes /> */}
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;