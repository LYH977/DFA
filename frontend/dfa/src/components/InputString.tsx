import React, { useState, useContext } from "react";
import { InputContent, InputContext, PatternContext } from "../contexts";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
    // fontWeight: "bold",
    background: "rgb(255, 115, 115)",
    // color: "white",
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
  const patternContext = useContext(PatternContext);
  // console.log({ patternContext });

  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        Input
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          {inputContext.state.map((obj: InputContent, id: number) => {
            let lowercaseName = obj.name.toLowerCase();
            let style =
              patternContext.state[lowercaseName] && patternContext.state[lowercaseName]["isChecked"]
                ? classes.coloredTitle
                : classes.title;
            return (
              <Typography className={style} color="textPrimary" display="inline" key={id}>
                {obj.name}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export default InputString;
