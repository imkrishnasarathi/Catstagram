import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import GuestAccess from './components/guestAccess';
import NotFound from './components/NotFound'; 
import UserRoute from './components/UserRoute';
import { UserProvider } from './components/UserContext';

const App = () => {
  return (
    <Router>
      <UserProvider username={null}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/guest" element={<GuestAccess/>} />
          <Route path="/:username" element={<UserRoute/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
