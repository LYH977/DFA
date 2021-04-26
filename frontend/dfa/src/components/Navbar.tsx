import React, { useState, useEffect } from "react";
import UploadFileDialog from "./Dialog";
import axios from "axios";

//MUI stuff
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";
import LanguageIcon from "@material-ui/icons/Language";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    popoverText: {
      padding: theme.spacing(2),
    },
    popoverTitle: {
      padding: "10px 10px 0 10px",
      fontWeight: "bold",
      textDecoration: "underline",
    },
    popoverStyle: {
      height: 300,
    },
    listItem: {
      margin: 0,
    },
  })
);

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [languages, setLanguages] = useState<string[] | null>(null);
  useEffect(() => {
    const getLanguages = async () => {
      try {
        let response = await axios.get("http://localhost:5000/api/dfa/languages");
        console.log("sddf", response.data);
        setLanguages(response.data.list);
      } catch (error) {
        console.log(error);
      }
    };
    getLanguages();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let popoverMarkup = (
    <Popover
      className={classes.popoverStyle}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Typography className={classes.popoverTitle}>{"Patterns"}</Typography>
      {languages && (
        <List dense={true}>
          {languages.map((language, id) => (
            <ListItem key={id}>
              <ListItemText className={classes.listItem} primary={`- ${language}`} secondary={null} />
            </ListItem>
          ))}
        </List>
      )}
    </Popover>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            DFA
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <LanguageIcon />
          </IconButton>
          {popoverMarkup}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenModal(true)}
          >
            <PublishIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <UploadFileDialog openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
