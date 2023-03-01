import React,{useEffect, useState} from 'react'
import {Form,Button, Card} from 'react-bootstrap'
import { useAuth } from '../../../utilities/AuthContext'
import { useParams,useNavigate } from 'react-router-dom';

function EditProduct() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {http}=useAuth();
    const [product, setProduct] = useState({
        name:""
    });

    const handleChange = (e) => {
        setProduct({...product,[e.target.name]:e.target.value});
    }


    //get product details
    useEffect(()=>{
        (async()=>{
            await http.get(`/product/${id}`)
            .then(res=>{
                setProduct((prev)=>({...prev,name:res.data.product.name}));
            })
            .catch(err=>{
                
            })
        })();
    },[id]);

    const SubmitForm=async(e)=>{
        e.preventDefault();
        await http.post(`/product/edit/${id}`,{...product})
            .then((res)=>{
                navigate('/dashboard');
            })
            .catch((err)=>{
                
            });
        
    }
  return (
    <Card>
        <Card.Header>Edit Product</Card.Header>
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

export default EditProduct