import React, { useState, useContext } from "react";
import { InputContext } from "../contexts";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { SET_INPUT } from "./Constant";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxHeight: "95%",
    border: "none",
    boxShadow: "none",
    overflow: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  coloredTitle: {
    fontSize: 14,
    background: "red", //rgb(48, 91, 161)
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  div: {
    weight: "inherit",
    height: "inherit",
    position: "relative",
  },
});

function InputString() {
  const classes = useStyles();
  const inputContext = useContext(InputContext);
  const t1 = "1212 ";
  const t2 = "armin ";

  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        Input
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          {/* <Typography className={classes.title} color="textPrimary" gutterBottom>
            {inputContext.input}
          </Typography> */}
          <Typography className={classes.title} color="textPrimary" display="inline">
            {t1}
          </Typography>
          <Typography className={classes.coloredTitle} color="textPrimary" display="inline">
            {t2}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InputString;
