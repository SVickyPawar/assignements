import {Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Otp from './components/Otp';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <h3>Welcome to Fastor</h3>
      
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/otpinput' element={<Otp/>}/>
      <Route path='/restaurants' element={<Homepage/>}/>
    </Routes>
    </div>
  
  );
}

export default App;
