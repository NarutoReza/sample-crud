import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nave from './Nave'
import Login from './Components/Login'
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';
import Add from './Components/Add';
import All from './Components/All';
import Edit from './Components/Edit'
import Delete from './Components/Delete'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nave />}>
            <Route index element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/add' element={<Add />} />
            <Route path='/all' element={<All />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
