import React from "react";
import { Button, Modal } from "@material-ui/core";
import { AddStudent, IAddStudentProps } from "./AddStudent";

export default function AddStudentButton({
  onSubmit,
}: IAddStudentProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div
      style={{
        position: "relative",
        textAlign: "left",
        top: "140px",
        left: "160px",
      }}
    >
      <Button variant="contained" color="secondary" onClick={handleToggle}>
        Add a Student
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddStudent onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}
