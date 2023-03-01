import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import { useAuth } from '../../utilities/AuthContext';

function Signup() {
  const {http,saveToken} = useAuth();

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange =(e)=>{
    setUser(prev=>({
      ...prev, [e.target.name]:e.target.value
    }))
  }

  const SignupForm = async(e) => {
    e.preventDefault();
    await http.post(`/register`,{
      ...user
    })
    .then((res) => {
      saveToken(res?.data?.user, res?.data?.token);
    })
    .catch(err=>{
      console.log(err);
    });
  }
  return (
    <Form onSubmit={SignupForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" name='name' defaultValue={user?.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' defaultValue={user?.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' defaultValue={user?.password} onChange={handleChange} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Signup