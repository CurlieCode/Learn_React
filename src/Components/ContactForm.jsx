import React, { useState, useEffect } from "react";

const ContactForm = ({ contact, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name || "");
      setEmail(contact.email || "");
      setPhone(contact.phone || "");
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, email, phone };
    onSubmit(newContact);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button type="submit">Save Contact</button>
    </form>
  );
};

export default ContactForm;

