import React, { useEffect, useState } from "react"
import sanityClient from "../client.js";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import '../style/Paper.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "white",
    backgroundColor: "black",
  },
}));


export default function Papers() {
  
  const classes = useStyles();
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "paper"]{
            _id, title, year, abstract
        }`)
      .then((data) => {
        data.sort((a, b) => - (a.year - b.year)); //sort descending by year of publication
        setPapers(data)
      })
      .catch(console.error);
  }, [], [papers]);  //useEffect() is been called when papers just update

  return (
    <div>
      <div className={classes.root}>
          {papers.map((a, i) => {
            return (
              <Grid key={i} container spacing={10}>
                <Grid key={'grid1'+i} item xs={1}>
                  <Paper key={'key1'+a._id} className='year-paper'>{a.year}</Paper>
                </Grid>
                <Grid key={'grid2'+i} item xs={4}>
                  <Paper key={'key2'+a._id} className={classes.paper}>{a.title}</Paper>
                </Grid>
                <span className="span-line-left-paper"></span>
                <Grid key={'grid3'+i} item xs={6}>
                  <Paper key={'key3'+a._id} className='abstract-paper'>{a.abstract}</Paper>
              </Grid>
              </Grid>
          )})}
      </div>
    </div>
  );
}