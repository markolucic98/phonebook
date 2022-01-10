import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./AddNewContactForm.module.css";
import AddNew from "../../button/Add";

const AddNewContact = () => {
  return (
    <div className={styles.AddNewContact}>
      <div className={styles.HedingClose}>
        <h2>Dodaj novi zapis</h2>
        <CloseIcon />
      </div>
      <input type="text" className={styles.Input} placeholder="Ime" />
      <input type="text" className={styles.Input} placeholder="Prezime" />
      <input type="text" className={styles.Input} placeholder="Email" />
      <input type="text" className={styles.Input} placeholder="Broj Telefona" />
      <AddNew />
    </div>
  );
};
export default AddNewContact;
