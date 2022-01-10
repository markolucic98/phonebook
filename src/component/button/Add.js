import React from "react";
import Button from "@mui/material/Button";

const AddNew = () => {
  const Add = () => {
    console.log(Math.random());
  };
  return (
    <Button
      variant="contained"
      size="medium"
      onClick={Add}
      style={{
        borderRadius: "15px",
        padding: "10px 25px",
        fontSize: "15px",
        textTransform: "none",
        fontWeight: "600",
        width: "80%",
      }}
    >
      Dodaj
    </Button>
  );
};
export default AddNew;
