import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../utilities/AuthContext';
import React,{useState} from 'react'

function Login() {

  const {http,saveToken} = useAuth();

  const [user,setUser] = useState({
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const LoginForm = async(e) => {
    e.preventDefault();
    await http.post(`/login`,{
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
    <Form onSubmit={LoginForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          name="email" onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          name='password' onChange={handleChange}
        />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;