import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import sanityClient from "../client.js";
import '../style/Research.css'

export default function Research() {
  
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "research"]{
            title,
             "imageUrl": image.asset->url,
             description,
             size
          }`)
      .then((data) => {
        setResearches(data)
        console.log(data)
      })
      .catch(console.error);
  }, [], [researches]);  //useEffect() is been called when papers just update

  return (
    <div>
      <div>
      <Grid container alignItems="center" justify="center" spacing={3}>
          {researches.map((a, i) => {
            return (
                <Grid item xs={12} sm={a.size}>
                    <Card>
                        <CardHeader
                        title={a.title}
                        subheader="September 14, 2020"
                        />
                        <CardMedia
                            component="img"
                            src={a.imageUrl}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {a.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                /*<Grid item xs={12} sm={3}>
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
            </Grid>*/
            
          )})}
            
          </Grid>
      </div>
    </div>
  );
}