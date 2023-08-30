import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/routes/login';
import Add from './components/routes/add';
import Delete from './components/routes/delete';
import Home from './components/routes/home';
import Completed from './components/routes/completed';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/completed" element={<Completed/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
