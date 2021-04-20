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

  const text =
    "The story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TitanThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TiThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TiThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus Titan and the Armored Titan. During the incident, Eren   mother is eaten byitan and the Armored Titan. During the incident, Eren   mother is eaten bytan and the Armored Titan. During the incident, Eren   mother is eaten bytan and the Armored Titan. During the incident, Eren   mother is eaten by and the Armored Titan. During the incident, Eren   mother is eaten by";
  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        Input
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InputString;
