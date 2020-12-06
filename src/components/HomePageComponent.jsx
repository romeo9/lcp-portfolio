import { Container, Grid } from '@material-ui/core'
import React from 'react'
import '../style/HomePageComponent.css'

class HomePageComponent extends React.Component{
    render(){
        return(
            <div className="img-homepage">
                <Container className="home-page">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Container>
                                <h1>Hello, I'm Luigi</h1>
                            </Container>
                        </Grid> 
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default HomePageComponent