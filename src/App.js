import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Home from './component/home/Home';

function App() {
  return (
    <div className="App">

<Routes>
        <Route path="/" exact element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        </Routes>
     
    
    </div>
  );
}

export default App;
