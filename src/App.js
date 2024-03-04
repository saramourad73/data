import './App.css';
import Login from './control/Login';
import Home from './control/Home';
import Data from './control/Data';
import { Routes, Route  } from "react-router-dom"
function App() {
  return (
<>

<Routes>
<Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Data" element={<Data/>}/>
  </Routes>
</>
  );
}

export default App;
