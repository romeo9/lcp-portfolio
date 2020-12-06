import { Container } from '@material-ui/core'
import React from 'react'
import '../style/ContactsPage.css'
import Contact from './Contact';

class ContactsPage extends React.Component{
    render(){
        return(
            <Container className='contacts-page-container'>
                <Contact></Contact>
            </Container>
            )
        }
    }
    
    export default ContactsPage