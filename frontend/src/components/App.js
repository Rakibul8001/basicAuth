import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Layout from './Layout';
import { AuthProvider } from '../utilities/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
