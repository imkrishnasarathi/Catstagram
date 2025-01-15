import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import GuestAccess from './components/guestAccess';
import UserPage from './components/userPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guest" element={<GuestAccess />} />
        <Route path="/yourprofile" element={<UserPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
