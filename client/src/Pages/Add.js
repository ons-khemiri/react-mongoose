import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addContact } from "../JS/Actions/contact";

const Add=()=>{
    const [newContact, setNewContact] = useState({});
    const dispatch = useDispatch() ;
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name] : e.target.value})
    }
    const add = () => {
        dispatch(addContact(newContact))
    }
    return (
    <div>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name="name" value={newContact.name} onChange={handleChange}/>
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="Enter age" name="age" value={newContact.age} onChange={handleChange}/>
    <Form.Label>favoriteFoods</Form.Label>
    <Form.Control type="text" placeholder="Enter favoriteFoods" name="favoriteFoods" value={newContact.favoriteFoods} onChange={handleChange}/>
    <Link to='/users'><Button variant="primary" type="submit" onClick={()=>add()}>
    Add 
    </Button>
    </Link>
    </div>  
)
};
export default Add;