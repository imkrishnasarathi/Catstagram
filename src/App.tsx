import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import GuestAccess from './components/guestAccess';
import NotFound from './components/NotFound'; 
import UserRoute from './UserRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guest" element={<GuestAccess />} />
        <Route path="/:username" element={<UserPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
