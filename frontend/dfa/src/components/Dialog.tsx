import React, { useState } from "react";
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

const UploadFileDialog: React.FC<Props> = ({ openModal, setOpenModal }) => {
  const classes = useStyles();
  const [isInValid, setIsInValid] = useState<boolean>(true);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    var selectedFile = e.target.files[0];
    validateFileType(selectedFile);
  };

  const validateFileType = (file: File): boolean => {
    var fileName = file.name;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

    if (extFile === "txt") {
      return true;
    } else {
      alert("wrong file format");
      return false;
    }
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
      >
        <DialogTitle id="alert-dialog-slide-title">{"New File Upload"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            className={classes.buttonText}
            disabled={isInValid}
          >
            Confirm
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            endIcon={<CancelIcon />}
            className={classes.buttonText}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UploadFileDialog;
