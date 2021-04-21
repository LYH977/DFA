import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputString from "./InputString";
import Checkboxes from "./pattern/Checkboxes";
import Occurences from "./pattern/Occurences";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },
    leftPaper: {
      padding: 10,
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      height: "78vh",
      fontSize: "20px",
      whiteSpace: "normal",
      position: "relative",
      // overflow: "auto",
    },
    rightPaper: {
      padding: 10,
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      height: "78vh",
      whiteSpace: "normal",
      position: "relative",
      overflow: "auto",
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
    inherit: {
      weight: "100%",
      height: "100%",
    },
    checkbox: {
      height: "40%",
    },
    occurence: {
      height: "40%",
    },
  })
);

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Paper className={classes.leftPaper} elevation={10}>
            <InputString />
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.rightPaper} elevation={10}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              bgcolor="background.paper"
              className={classes.inherit}
            >
              <Box p={1} className={classes.checkbox}>
                <Checkboxes />
              </Box>
              <Box p={1} className={classes.occurence}>
                <Occurences />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
