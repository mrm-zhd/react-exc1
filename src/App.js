// import logo from './logo.svg';
import './App.css';
// import WriteText from './WriteTxt.jsx';
import ShowButton from './components/button/Button.jsx';

function App() {
  return (
    <>
      <ShowButton vari="primary" className="p-10"></ShowButton>
      <ShowButton vari="error"></ShowButton>
      <ShowButton vari="warning"></ShowButton>
      <ShowButton vari="success"></ShowButton>
    </>
  );
}

export default App;
