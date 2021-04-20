import React, { useState } from "react";
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

const useStyles = makeStyles({
  cardRoot: {
    minWidth: 275,
    overflow: "auto",
  },
  listRoot: {
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: 3,
  },
});

function Occurences() {
  const classes = useStyles();
  const [name, setName] = useState<string>("test");
  const [occurence, setOccurence] = useState<number>(1);

  return (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Pattern : '{name}'
        </Typography>
        <Typography className={classes.title} component="h2">
          Occurence : {occurence}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Occurences;
