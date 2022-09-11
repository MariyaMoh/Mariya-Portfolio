const mg = require('mailgun-js');

const mailgun = () =>
  mg({
    key: '1f0df2402932469fbf82576ca653d548-07a637b8-6fbf777c',
    domain: '1sandbox9011d08e70e4426aa0582055b64dff27.mailgun.org',
  });

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
  const { messsage, email } = req.body;

  mailgun()
    .messages()
    .send(
      {
        from: 'Mariya <alshaibi199732@gmail.com>',
        to: `${email}`,
        html: `<p>${messsage}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ messsage: 'error in sending email' });
        } else {
          console.log(body);
          res.send({ messsage: 'email sent successfully' });
        }
      }
    );
}
