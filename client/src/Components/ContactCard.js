import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../JS/Actions/contact";

const ContactCard=({contact})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate()
  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{contact.name}</Card.Title>
    <Card.Text>{contact.age}</Card.Text>
    <Card.Text>{contact.favoriteFoods}</Card.Text>
    <Button variant="primary" onClick={()=>navigate('/edit/${contact.id}')}>Edit</Button>
    <Button variant="primary" onClick={()=>useDispatch(deleteContact(contact.id))}>Delete</Button>
  </Card.Body>
</Card>
    </div>  
    )
}
export default ContactCard;