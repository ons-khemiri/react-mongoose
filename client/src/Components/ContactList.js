import React,{ useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getContacts} from '../JS/actions/contact'
import ContactCard from './ContactCard'

const ContactList=()=>{
const dispatch = useDispatch()
const listContacts = useSelector((state) => state.contactReducer.listContacts)
const load = useSelector((state) => state.contactReducer.load)
    useEffect(() => {
        dispatch(getContacts())}, [dispatch])
    return(
    <div style={{display: 'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
 {load ? (<h2>loading...</h2> ): ( listContacts.map((el) => <ContactCard contact={el} key={el.id}/>))}
    </div>  
    )
}
export default ContactList;