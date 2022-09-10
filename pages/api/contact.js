// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const contact = req.body.contact;
//     res.status(201).json(newContact);
//   }
// }

// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: 'api',
//   key: '1f0df2402932469fbf82576ca653d548-07a637b8-6fbf777c',
// });
// mg.messages
//   .create(sandbox9011d08e70e4426aa0582055b64dff27.mailgun.org, {
//     from: 'Mailgun Sandbox <postmaster@sandbox9011d08e70e4426aa0582055b64dff27.mailgun.org>',
//     to: ['alshaibi199732@gmail.com'],
//     subject: 'Hello',
//     text: 'Testing some Mailgun awesomness!',
//   })
//   .then((msg) => console.log(msg)) // logs response data
//   .catch((err) => console.log(err)); // logs any error`;

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
