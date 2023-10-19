import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-between",padding:"10px 15px"}}>
        <h3>Note-Taker</h3>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
