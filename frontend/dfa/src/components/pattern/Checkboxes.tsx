import React, { useState, useContext } from "react";
import { InputContext, PatternContext } from "../../contexts";
import { TOGGLE_PATTERN_ISCHECKED } from "../Constant";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  cardRoot: {
    minWidth: 275,
    maxWidth: 275,

    minHeight: "100%",
    maxHeight: "100%",
    wordWrap: "break-word",

    overflow: "auto",
  },
  listRoot: {
    display: "flex",
  },

  title: {
    fontSize: 14,
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

type Checkbox = {
  [key: string]: boolean;
};

function Checkboxes() {
  const patternContext = useContext(PatternContext);
  // const inputContext = useContext(InputContext);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    patternContext.dispatch({ type: TOGGLE_PATTERN_ISCHECKED, payload: event.target.name });
  };

  const labelMarkup = (name: string, occurence: number) => {
    return (
      <>
        <Typography color="textPrimary" display="inline">
          {name}
        </Typography>
        <Typography color="textPrimary" display="inline" variant="overline">
          {` (${occurence})`}
        </Typography>
      </>
    );
  };

  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Pattern (Occurence)
      </Typography>
      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              {Object.keys(patternContext.state)
                .sort()
                .map((name, id) => (
                  <FormControlLabel
                    key={id}
                    control={
                      <Checkbox checked={patternContext.state[name].isChecked} onChange={handleChange} name={name} />
                    }
                    label={labelMarkup(name, patternContext.state[name].occurence)}
                  />
                ))}
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default Checkboxes;
