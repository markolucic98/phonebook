import React, { useState } from "react";
import Add from "./addContact/AddContact";
import AddNewContact from "./addNewContactForm/AddNewContactForm";
import ContactList from "./contactList/ContactList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Add />
      <div className={styles.Home2}>
        <ContactList />
        <AddNewContact />
      </div>
    </div>
  );
};
export default HomePage;
