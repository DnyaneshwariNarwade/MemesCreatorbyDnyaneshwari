import React from "react";
import { Button,Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const MemeCart=(props)=>
{
    const navigate=useNavigate()
    return <div >
    <Card style={{ width: '18rem', height:'30rem', margin:'25px' }}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      
        <Button onClick={e=>{navigate(`/edit?url=${props.img}`)}} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
}
export default MemeCart;