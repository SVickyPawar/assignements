import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className='px-1 md:px-4 bg-slate-300'>
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
