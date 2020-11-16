import { Grid } from '@material-ui/core';
import React from 'react'
import Paper from './Paper'

class PapersPage extends React.Component {

 render(){
     return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper></Paper> 
            </Grid>
        </Grid>
     )
 }
}

export default PapersPage;