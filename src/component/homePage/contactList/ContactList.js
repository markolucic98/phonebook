import React from "react";
import ContactItem from "../contactItem/ContactItem";
import styles from "./ContactList.module.css";

const ContactList = () => {
  return (
    <div className={styles.ContactList}>
      <div className={styles.OnContactList}>
        <span>Ime</span>
        <span>Prezime</span>
        <span>Email</span>
        <span>Br.Telefona</span>
        <span>Akcija</span>
      </div>
    </div>
  );
};
export default ContactList;
