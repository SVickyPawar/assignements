import { useEffect, useState } from "react";
import "./App.css";
import Booklet from "./Components/Booklet";

function App() {
  const [isTakeTest, setIsTakeTest] = useState(false);

  const fetchData = fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz').then((res)=>res.json()).then(data=>console.log(data))
  useEffect(()=>{
    fetchData();
  },[])

  return <div className="App">{/* import Booklet component here */}
    <h3></h3>
  </div>;
}

export default App;
