import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import { initialWord, InputContext, PatternContext, WordContext } from "../contexts";
import { SET_INPUT, SET_PATTERN, SET_WORD } from "./Constant";
//MUI
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import CancelIcon from "@material-ui/icons/Cancel";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";

// declare module "axios" {
//   export interface AxiosRequestConfig {
//     inputString: string;
//   }
// }

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonText: {
      fontSize: 12,
    },
    buttonProgress: {
      // color: 'green[500]',
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
  })
);
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
const UploadFileDialog: React.FC<Props> = ({ openModal, setOpenModal }) => {
  const inputContext = useContext(InputContext);
  const patternContext = useContext(PatternContext);
  const wordContext = useContext(WordContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const [isInValid, setIsInValid] = useState<boolean>(true);
  const [inputString, setInputString] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [severity, setSeverity] = useState<Color>("info");
  const [message, setMessage] = useState("No message");

  const handleConfirm = async () => {
    setLoading(true);
    setIsInValid(true);

    try {
      let response = await axios.post("http://localhost:5000/api/dfa/result", {
        inputString: inputString,
      });
      console.log(response.data);
      wordContext.dispatch({ type: SET_WORD, payload: initialWord });
      inputContext.dispatch({ type: SET_INPUT, payload: response.data.formattedString });
      patternContext.dispatch({ type: SET_PATTERN, payload: response.data.patterns });
      setSeverity("success");
      setMessage("Successfully processed DFA");
    } catch (error) {
      console.log(error);
      setSeverity("error");
      setMessage("Failed to process DFA");
    }

    handleClose();
    setOpenSnackbar(true);
    setLoading(false);
  };

  const handleClose = () => {
    (inputRef.current as HTMLInputElement).value = "";
    setIsInValid(true);
    setOpenModal(false);
    setInputString("");
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    let selectedFile = e.target.files[0];
    let path = e.target.value;
    setIsInValid(validateFileType(selectedFile, path) ? false : true);
  };

  const readFile = (file: File) => {
    let reader = new FileReader();
    reader.onload = async function (event: ProgressEvent<FileReader>) {
      let text = (event.target as FileReader).result;
      // console.log(text);
      setInputString(text as string);
    };
    reader.readAsText(file);
  };

  const validateFileType = (file: File, path: string): boolean => {
    let fileName = file.name;
    let idxDot = fileName.lastIndexOf(".") + 1;
    let extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "txt") {
      readFile(file);
      return true;
    }
    alert("wrong file format");
    path = "";
    return false;
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div>
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        disableEscapeKeyDown
        disableBackdropClick
      >
        <DialogTitle id="alert-dialog-slide-title">{"New File Upload"}</DialogTitle>
        <DialogContent style={{ height: 70 }}>
          <input type="file" accept=".txt" onChange={onSelectFile} ref={inputRef} disabled={loading} />
        </DialogContent>

        <DialogActions>
          <div className={classes.wrapper}>
            <Button
              onClick={handleConfirm}
              variant="contained"
              color="primary"
              startIcon={<CloudUploadIcon />}
              className={classes.buttonText}
              disabled={isInValid}
              size="small"
            >
              Confirm
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>

          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            endIcon={<CancelIcon />}
            className={classes.buttonText}
            size="small"
            disabled={loading}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UploadFileDialog;
