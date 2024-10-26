import React, { useState, useEffect } from "react";
import { fetchContacts, createContacts, updateContacts, deleteContacts } from "../api";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error loading contacts:", error);
      setContacts([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteContacts(id);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleEdit = (contact) => {
    setEditContact(contact);
  };

  const handleFormSubmit = async (contactData) => {
    try {
      if (editContact) {
        const updatedContact = await updateContacts(editContact._id, contactData);
        setContacts(contacts.map((c) => (c._id === editContact._id ? updatedContact : c)));
        setEditContact(null);
      } else {
        const newContact = await createContacts(contactData);
        setContacts([...contacts, newContact]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm contact={editContact} onSubmit={handleFormSubmit} />
      {contacts.map((contact) => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onDelete={() => handleDelete(contact._id)}
          onEdit={() => handleEdit(contact)}
        />
      ))}
    </div>
  );
};

export default ContactList;