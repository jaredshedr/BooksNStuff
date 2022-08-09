// import React from "react";

function MailGun() {
  const mailgun = require("mailgun.js");
  const DOMAIN = "sandbox1516cffe106148f4b4679366d4cc9851.mailgun.org";
  const mg = mailgun({apiKey: "", domain: DOMAIN});
  const data = {
    from: "Mailgun Sandbox <postmaster@sandbox1516cffe106148f4b4679366d4cc9851.mailgun.org>",
    to: "jaredsurfside@gmail.com",
    subject: "Hello",
    text: "Your message is",
    'h:X-Mailgun-Variables': {test: "test"},
    'o:deliverytime': 'Tue, 09 Oct 2022 09:00:00 GMT'
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
  // # Send an email using your active template with the above snippet
  // # You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

}

export default MailGun