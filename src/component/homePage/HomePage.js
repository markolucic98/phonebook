import React from 'react';
import Add from './addContact/AddContact';
import AddNewContact from './addNewContactForm/AddNewContactForm';
import ContactList from './contactList/ContactList';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1>home</h1>
      <Add />
      <div clasName={styles.Add2}>
        <ContactList />
        <AddNewContact />
      </div>
    </div>
  );
};
export default HomePage;
