const nodemailer = require("nodemailer");
require("dotenv").config();

export default function message(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const option = {
    from: process.env.EMAIL,
    to: "huyenducnguyen0404@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`,
  };

  transporter.sendMail(option, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
