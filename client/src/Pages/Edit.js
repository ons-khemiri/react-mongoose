import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editContact } from "../JS/actions/contact";

const Edit=()=>{
    const dispatch=useDispatch();
    const [newContact, setNewContact] = useState({});
    const idContact=useSelector(state=>state.contactReducer.idContact)
    const match=useMatch("/edit/:id")
    const navigate=useNavigate()
    const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name] : e.target.value})
    };
    useEffect(()=>{
    dispatch(idContact(match.params.id))
    })
    const handleEdit=()=>{
        dispatch(editContact(match.params.id,newContact))
        navigate(-1)
    }
    return (
    <div>
<Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder={`${idContact.name}`} name="name" value={newContact.name} onChange={handleChange} />
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder={`${idContact.age}`} name="age" value={newContact.age} onChange={handleChange}/>
    <Form.Label>favoriteFoods</Form.Label>
    <Form.Control type="text" placeholder={`${idContact.favoriteFoods}`} name="favoriteFoods" value={newContact.favoriteFoods} onChange={handleChange}/>
    <Link to='/users'><Button variant="primary" type="submit" onClick={handleEdit}>
    Edit contact
    </Button>
    </Link>
    </div> 
    )
};
export default Edit;