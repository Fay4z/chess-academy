const express = require("express");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors')

const app = express();


dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

console.log(process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

app.post('/formData', (req, res) => {
const formData = req.body;
console.log('Received form data:', formData);
res.send('Form data received successfully!');
const details = {
    from: `"Contact:Chess Academy form" <${process.env.EMAIL_USER}>`, // sender address
    to: `${process.env.MAIL_TO}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `
        <h1>Name: ${formData.name}</h1>
        <h1>Email: ${formData.email}</h1>
        <h1>Phone: ${formData.phone}</h1>
        <h1>Details: ${formData.details}</h1>

            `, // html body
    }

async function main() {
    const info = await transporter.sendMail(details);
    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
});

app.get("/", (rez, res) => {
    res.send("hello");
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});