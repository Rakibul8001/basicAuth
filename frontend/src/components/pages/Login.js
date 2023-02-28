import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../utilities/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const router = useNavigate();
  const {http,saveToken}=useAuth();

  const [email,setEmail]=useState('');
  const [password,setPassword]= useState('');
  const LoginForm=async(e)=>{
    e.preventDefault();
    await http.post(`/login`,{
      email:email,password:password
    })
    .then((res) => {
      saveToken(res?.data?.user, res?.data?.token);
    })
    .catch(err=>{
      console.log(err);
    });

  }

  return (
    <Form onSubmit={LoginForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          defaultValue={email} 
          name="email" onChange={(e)=>setEmail(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
          name="password" defaultValue={password} 
          onChange={(e)=>setPassword(e.target.value)} 
        />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;