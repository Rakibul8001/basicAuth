import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Layout from './components/Layout';
import { AuthProvider } from './utilities/AuthContext';
import PublicRoute from './utilities/PublicRoute';
import ProtectedRoute from './utilities/ProtectedRoute';
import CreateProduct from './components/pages/product/Create';
import EditProduct from './components/pages/product/Edit';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<PublicRoute Component={(props)=><Signup {...props} key={Date.now()} />} />}/>
          <Route path="/login" element={<PublicRoute Component={(props)=><Login {...props} key={Date.now()}/>} />}/>
          <Route path="/dashboard" element={<ProtectedRoute Component={(props)=><Dashboard {...props} key={Date.now()}/>} />}/>
          <Route path="/product/create" element={<ProtectedRoute Component={(props)=><CreateProduct {...props} key={Date.now()}/>} />}/>
          <Route path="/product/edit/:id" element={<ProtectedRoute Component={(props)=><EditProduct {...props} key={Date.now()}/>} />}/>
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
