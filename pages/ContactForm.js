import { useState } from 'react';

export default function ContactForm() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState('');

  const submitContact = async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ contact }),
      Headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <button onClick={submitContact}> Submit</button>
    </>
  );
}
