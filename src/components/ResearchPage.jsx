import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography} from '@material-ui/core';

class ResearchPage extends React.Component {
    render(){
        return(
            <div>
            <h1 style={{textAlign: 'center'}}>Researches</h1>
            <Grid container alignItems="center" justify="center" spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardHeader
                        title="Carpobrotus"
                        subheader="September 14, 2020"
                        />
                        <CardMedia
                            component="img"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardHeader
                        title="Alien Plant 2"
                        subheader="September 14, 2021"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardHeader
                        title="Alien Plant 3"
                        subheader="September 14, 2022"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default ResearchPage;