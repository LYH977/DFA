import React, { useContext } from "react";
import { InputContent, InputContext, PatternContext, WordContext } from "../contexts";
import { NEWLINE_REGEX, SET_WORD, WORD_REGEX } from "./Constant";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  normalText: {
    fontSize: 14,
    "&:hover": {
      backgroundColor: "rgb(255, 222, 222)",
      cursor: "pointer",
    },
  },
  colorlessText: {
    fontSize: 14,
  },
  coloredText: {
    fontSize: 14,
    background: "rgb(255, 150, 150)",
    "&:hover": {
      background: "rgb(255, 0, 0)",
      cursor: "pointer",
    },
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
  const wordContext = useContext(WordContext);

  const handleClickWord = (name: string, process: string, index: number) => {
    wordContext.dispatch({ type: SET_WORD, payload: { name, process, index } });
  };

  const contentMarkup = (obj: InputContent, id: number) => {
    if (WORD_REGEX.test(obj.name)) {
      let lowercaseName = obj.name.toLowerCase();
      let textClass =
        patternContext.state[lowercaseName] && patternContext.state[lowercaseName]["isChecked"]
          ? classes.coloredText
          : classes.normalText;
      let style =
        id === wordContext.state.index
          ? textClass === classes.coloredText
            ? { background: "orange" }
            : { background: "yellow" }
          : {};
      let fWeight = id === wordContext.state.index ? "fontWeightBold" : "fontWeightMedium";
      return (
        <Typography
          component="div"
          className={textClass}
          color="textPrimary"
          display="inline"
          key={id}
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
            handleClickWord(obj.name, obj.process, obj.index)
          }
        >
          <Box fontWeight={fWeight} m={1} display="inline" padding={0} margin={0} style={style}>
            {obj.name}
          </Box>
        </Typography>
      );
    }
    if (NEWLINE_REGEX.test(obj.name)) {
      return <br />;
    }
    return (
      // char such as symbol, whitespace
      <Typography className={classes.colorlessText} color="textPrimary" display="inline" key={id}>
        {obj.name}
      </Typography>
    );
  };

  return (
    <div className={classes.div}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        Input
      </Typography>
      <Card className={classes.root}>
        <CardContent>{inputContext.state.map((obj: InputContent, id: number) => contentMarkup(obj, id))}</CardContent>
      </Card>
    </div>
  );
}

export default InputString;
