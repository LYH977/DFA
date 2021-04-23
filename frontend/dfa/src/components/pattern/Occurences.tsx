import React, { useState, useContext, useEffect } from "react";
import { PatternContext, PatternObj } from "../../contexts";
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
    overflow: "auto",
    minHeight: "100%",
    maxHeight: "100%",
  },
  listRoot: {
    display: "flex",
  },

  title: {
    fontSize: 14,
  },
  boldText: {
    fontSize: 14,
    fontWeight: "bold",
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
  const inputContext = useContext(PatternContext);

  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          {inputContext.state &&
            Object.keys(inputContext.state)
              .sort()
              .map((name, id) =>
                inputContext.state[name].isChecked ? (
                  <>
                    <Typography className={classes.title} component="h2" gutterBottom>
                      {"Pattern : "}
                      <Typography className={classes.boldText} display="inline">
                        '{name}'
                      </Typography>
                    </Typography>
                    <Typography className={classes.title} component="h2">
                      Occurence : {inputContext.state[name].occurence}
                    </Typography>
                    <Divider />
                  </>
                ) : null
              )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Occurences;
