import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Component/Login';
import Otp from './Component/Otp';
import Details from './Component/Details';
import Dashboard from './Component/Dashboard';
import {Context,Collection} from './Component/Context';




function App() {
  return (
    <div className="App">
    <Context>
   <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="otp" element={<Otp/>}/>
        <Route path="details" element={<Details/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
    </Context>
    </div>
  );
}

export default App;
