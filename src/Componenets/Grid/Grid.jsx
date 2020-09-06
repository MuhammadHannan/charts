import React, { Component, useContext, useEffect, useState } from "react"; 
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Charts from "../Charts/Charts";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  
}));



export default function CenteredGrid() {
  const classes = useStyles();
  
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid  item xs={12}>
          <Paper className={classes.paper}>
            <Charts></Charts>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
