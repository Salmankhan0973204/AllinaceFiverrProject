import { Routes, Route, Navigate } from 'react-router-dom'
import '../App.css';
import SignIn from './auth/SignIn';
import SignUp from './auth/SingUp';
import Home from './home/Home';
import { AuthProvider } from '../contexts/AuthContext';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from "./PrivateRoute"
import Todos from './todos/Todos';
import Calendar from './calendar/Calendar';

function App() {
  return (
    <div className="App">
<AuthProvider>
<Routes>

        <Route path="/" exact element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/dashboard" element={<Dashboard />}/>
         <Route path="/todo" element={<Todos />}/>
         <Route path="/calendar" element={<Calendar />}/>
       
      
        </Routes>
        </AuthProvider>
     
    
    </div>
  );
}

export default App;
