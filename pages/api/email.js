const mg = require('mailgun-js');

const mailgun = () =>
  mg({
    key: `MAILGUN_API_KEY`,
    domain: `MAILGUN_DOMAIN`,
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
