import { Grid, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import sanityClient from "../client.js";

export default function About(){

  const [about, setAbout] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"]{
            description,
            "imageUrl": photo.asset->url
        }`)
      .then((data) => {
        setAbout(data)
      })
      .catch(console.error);
  }, [], [about]);

  return(
      <Container>
        <div className="papers-page-title">
                <h1 className="h2-papers-page-title">About Me</h1>
             </div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src={about[0] && about[0].imageUrl} alt="About" width="450"></img>
          </Grid>
          <Grid item xs={6}>
            <p>{about[0] && about[0].description}</p>
          </Grid>
        </Grid>
      </Container>
  )

}