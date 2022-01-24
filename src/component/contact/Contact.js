import React from "react";
import styles from "../contact/Contact.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h1>Kontaktirajte nas</h1>
      <form className={styles.ContactUs}>
        <input
          className={styles.input1}
          placeholder="Ime i prezime"
          type="text"
        />
        <input className={styles.input1} placeholder="Email" type="text" />
        <input
          className={styles.input2}
          placeholder="Sadrzaj poruke"
          type="text"
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Posalji
        </Button>
      </form>
    </div>
  );
};
export default Contact;
