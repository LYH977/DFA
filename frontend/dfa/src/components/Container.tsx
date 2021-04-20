import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputString from "./InputString";
import Checkboxes from "./pattern/Checkboxes";
import Occurences from "./pattern/Occurences";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      height: "78vh",
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "normal",
      position: "relative",
    },
    rightGridItem: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),

      position: "relative",

      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "normal",
    },
    test: {
      flexGrow: 1,
    },
  })
);

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper} elevation={10}>
            <InputString />
          </Paper>
        </Grid>

        <Grid item xs={4} spacing={2}>
          <Paper className={classes.paper} elevation={10}>
            <Grid item direction="column" justify="center" alignItems="center" xs>
              <Checkboxes />
            </Grid>

            <Grid item direction="column" justify="center" alignItems="center" xs>
              <Occurences />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
