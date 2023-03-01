import React,{useState} from 'react'
import {Form,Button, Card} from 'react-bootstrap'
import { useAuth } from '../../../utilities/AuthContext';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    const navigate = useNavigate();
    const {http}=useAuth();
    const [product, setProduct] = useState({
        name:""
    })
    const handleChange = (e) => {
        setProduct({...product,[e.target.name]:e.target.value});
    }
    const SubmitForm=async(e)=>{
        e.preventDefault();
        await http.post('/product/create',{...product})
            .then((res)=>{
                navigate('/dashboard');
            })
            .catch((err)=>{
                console.log(err)
            });
        
    }
  return (
    <Card>
        <Card.Header>Create Product</Card.Header>
        <Card.Body>
            <Form onSubmit={SubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="name" defaultValue={product?.name} onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </Card.Body>
    </Card>

  )
}

export default CreateProduct