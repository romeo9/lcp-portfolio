import './App.css';
import React from "react";
import { Container, Tab, Tabs } from '@material-ui/core';
import HomePageComponent from './components/HomePageComponent';
import PapersPage from './components/PapersPage';
import ContactsPage from './components/ContactsPage';
import ResearchPage from './components/ResearchPage';
import About from './components/About';

export default function App(){

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
      <Container>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
            >
                <Tab className="tab-class" label="Home" value={0}/>
                <Tab className="tab-class" label="About Me" value={1}/>
                <Tab className="tab-class" label="Papers" value={2}/>
                <Tab className="tab-class" label="Research" value={3}/>
                <Tab className="tab-class" label="Contacts" value={4}/>
          </Tabs>
          {value !== undefined && value===0 && <HomePageComponent/>}
          {value !== undefined && value===1 && <About/>}
          {value !== undefined && value===2 && <PapersPage/>}
          {value !== undefined && value===3 && <ResearchPage>Research</ResearchPage>}
          {value !== undefined && value===4 && <ContactsPage/>}
      </Container>
  );
}
