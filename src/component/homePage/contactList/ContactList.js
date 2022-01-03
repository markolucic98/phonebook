import React from 'react';
import ContactItem from '../contactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  return (
    <div className={styles.ContactList}>
      <h1>contact list in Contact list</h1>
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
};
export default ContactList;
