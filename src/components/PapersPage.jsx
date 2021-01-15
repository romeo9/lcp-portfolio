import { Container, Grid } from '@material-ui/core';
import React from 'react'
import Papers from './Paper'
import "../style/PapersPage.css"

class PapersPage extends React.Component {

 render(){
     return(
         <Container>
             <div className="papers-page-title">
                <h1 className="h2-papers-page-title">Publications</h1>
             </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Papers></Papers> 
                </Grid>
            </Grid>
        </Container>
     )
 }
}

export default PapersPage;