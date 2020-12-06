import { List, ListItem, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import sanityClient from "../client.js";
import '../style/Contact.css'

export default function Contact() {
  
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"]{
            type, info
        }`)
      .then((data) => {
        setContacts(data)
      })
      .catch(console.error);
  }, [], [contacts]);  //useEffect() is been called when papers just update

  return (
    <div>
      <div>
          {contacts.map((a, i) => {
            return (
                <List>
                    <ListItem>
                        <ListItemText 
                         className='contact-item'
                         primary={a.type}
                         secondary={a.info}/>
                    </ListItem>
              </List>
          )})}
      </div>
    </div>
  );
}