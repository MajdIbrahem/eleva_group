
import './App.css';
import DarkModeProvider from './context/DarkModeContext';
import ForgetPassword from './pages/ForgetPassword';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashborad from './pages/Dashborad';
import PendingRequest from './pages/PendingRequest'
import ResetPassword from './pages/ResetPassword';
import LogRequest from './pages/LogRequest'
import CreateRequest from './pages/CreateRequest'
import MangerRequest from './pages/action-request/MangerRequest';
import CCTRequest from './pages/action-request/CCTRequest'
import AccountRequest from './pages/action-request/AccountRequest'
import TrackRequest from './pages/TrackRequest';
import OfficerRequest from './pages/action-request/OfficerRequest'
function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/forget-password' element={<ForgetPassword/>}></Route>
          <Route path='/reset-password' element={<ResetPassword/>}></Route>
          <Route path='/dashboard' element={<Dashborad/>}></Route>
          <Route path='/pending-request' element={<PendingRequest/>}></Route>
          <Route path='/log-request' element={<LogRequest/>}></Route>
          <Route path='/creat-request' element={<CreateRequest/>}></Route>
          <Route path='/action-request/:id' element={<OfficerRequest/>}></Route>
          <Route path='/track-request/:id' element={<TrackRequest/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
