import './App.css';
// import ShowForm from './components/common/form/form.jsx';
import ListUsers from './components/common/users/ListUsers.jsx';

function App() {
    
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        <ListUsers/>  
        {/* <ShowForm /> */}
    </div>
  );
}

export default App;
