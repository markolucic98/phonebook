import React from "react";
import Button from "@mui/material/Button";

const NewContact = () => {
  return (
    <Button
      variant="contained"
      size="medium"
      style={{
        borderRadius: "15px",
        padding: "10px 25px",
        fontSize: "15px",
        textTransform: "none",
        fontWeight: "600",
      }}
    >
      Dodaj Novi
    </Button>
  );
};
export default NewContact;
