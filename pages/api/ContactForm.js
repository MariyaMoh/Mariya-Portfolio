export default function handler(req, res) {
  if (req.method === 'GET') {
    res.staus(200).json(contacts);
  } else if (req.method === 'POST') {
    const contact = req.body.contact;
    const newContact = {
      id: Date.now(),
      text: contact,
    };
    contact.push(newContact);
    res.status(201).json(newContact);
  }
}
