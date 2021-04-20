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
    minHeight: "100%",
    maxHeight: "100%",

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

type Props = {
  [key: string]: boolean;
};

function Checkboxes() {
  const [checkboxList, setCheckboxList] = useState<Props>({
    gilad: true,
    jason: false,
    antoine: false,
    g2ilad: true,
    ja3son: false,
    ant4oine: false,
    gil5ad: true,
    jas6on: false,
    antoi7ne: false,
  });

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxList({
      ...checkboxList,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Pattern Found
      </Typography>
      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              {Object.keys(checkboxList)
                .sort()
                .map((name, id) => (
                  <FormControlLabel
                    key={id}
                    control={<Checkbox checked={checkboxList[name]} onChange={handleChange} name={name} />}
                    label={name}
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
