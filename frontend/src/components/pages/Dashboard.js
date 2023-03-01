import {Table,Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utilities/AuthContext';
import React,{ useEffect,useState,Fragment } from 'react';

function Dashboard() {
    const {http} = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        let isSubscribed = true;
        await http.get('/products')
        .then(res => {
            if(isSubscribed) {
                setProducts(res.data?.products);
                setLoading(false);
            }
            
        })
        .catch((err) => {
           
        });

        return()=> isSubscribed=false;
    }

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <Card>
        <Card.Body>
            <div className="d-flex align-items-center">
                <div className='me-auto'>
                    <Card.Title>Products</Card.Title>
                </div>
                <div >
                    <Link to="/product/create" className='btn btn-primary'>Add Product</Link>
                </div>
            </div>

            <Table striped bordered hover size="sm" className='mt-3'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                 
                    </tr>
                </thead>
                <tbody>
                    {!loading && products && products.map((product, index) => (<Fragment key={index}>
                    <tr>
                        <td>{index+1}</td>
                        <td>{product?.name}</td>
                        <td>
                            <ul className='inlineList'>
                                <li><Link to={`/product/edit/${product?.id}`}>edit</Link></li>
                                <li><Link to="#">delete</Link></li>
                            </ul>
                        </td>
                    </tr>
                    </Fragment>))}
                </tbody>
            </Table>

        </Card.Body>
    </Card>
  );
}

export default Dashboard;