import React, { useState, useRef } from "react";
import axios from "axios";
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

declare module "axios" {
  export interface AxiosRequestConfig {
    inputString: string;
  }
}

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

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
  })
);
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
const UploadFileDialog: React.FC<Props> = ({ openModal, setOpenModal }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const [isInValid, setIsInValid] = useState<boolean>(true);
  const [inputString, setInputString] = useState<string>("");
  const [tt, settt] = useState<string>("Confirm");

  const handleConfirm = async () => {
    settt("loading");
    setIsInValid(true);

    try {
      let response = await axios.get("http://localhost:5000/api/dfa", {
        inputString: inputString,
      });
      console.log(response.data);
      settt("done");
    } catch (error) {
      console.log(error);
      settt("error");
    }

    handleClose();
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
      // alert(text);
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

  return (
    <div>
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        onEscapeKeyDown={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">{"New File Upload"}</DialogTitle>
        <DialogContent style={{ height: 70 }}>
          <input type="file" accept=".txt" onChange={onSelectFile} ref={inputRef} />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            className={classes.buttonText}
            disabled={isInValid}
            size="small"
          >
            {tt}
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            endIcon={<CancelIcon />}
            className={classes.buttonText}
            size="small"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UploadFileDialog;
