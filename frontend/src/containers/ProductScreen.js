import React,{useState,useEffect} from 'react'
import { Link, useParams  } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = (props) => {
  const [product,setProduct] = useState([])
  const { id } = useParams();
  useEffect(()=>{
    async function fetchProduct(){
      const {data} =await axios.get(`/api/products/${id}`)
      setProduct(data) 
    }
    fetchProduct()
  },[])

  return (
    <div>
      <Link to='/' className='btn btn-default my-2'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}  color='#f8e825'/>
            </ListGroup.Item>

            <ListGroup.Item>
              Price: Rs{product.price}
            </ListGroup.Item> 

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>    
          </ListGroup>    
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Button className='btn-block' disabled={product.countInStock===0} type='button'>Add to Cart</Button>
                </Row>
              </ListGroup.Item> 
            </ListGroup> 
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default ProductScreen