import React, { useState, useContext, useEffect } from "react";
import { WordContext } from "../../contexts";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  cardRoot: {
    minWidth: 275,
    maxWidth: 275,
    overflow: "auto",
    minHeight: "100%",
    maxHeight: "100%",
    wordWrap: "break-word",
  },
  listRoot: {
    display: "flex",
  },

  title: {
    fontSize: 14,
  },
  decoratedText: {
    fontSize: 14,
    fontWeight: "bold",
    textDecoration: "underline",
  },

  formControl: {
    margin: 3,
  },
  div: {
    weight: "inherit",
    height: "100%",
    position: "relative",
    // background: "red",
  },
});

function Occurences() {
  const wordContext = useContext(WordContext);

  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Info
      </Typography>
      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          <Typography className={classes.decoratedText} variant="button" component="h2">
            Word:
          </Typography>
          <Typography className={classes.title} variant="caption" style={{ background: "yellow" }}>
            {wordContext.state.name}
          </Typography>
          <br />
          <br />
          <Typography className={classes.decoratedText} variant="button" component="h2">
            State change:
          </Typography>
          <Typography className={classes.title} variant="caption" component="h2">
            {wordContext.state.process}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Occurences;
