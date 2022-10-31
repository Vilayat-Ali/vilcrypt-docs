const visitorName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function () {
  // data
  const data = {
    visitorName: visitorName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  /*------------------SMTP Section Start-----------------------------*/

  const smtp = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "Your gmail",
      pass: `app password`,
    },
  });

  var mailOptions = {
    to: req.body.to,
    subject: data.subject,
    text: data.message,
  };

  smtp.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      alert("Email sent ");
    }
  });
  /*------------------SMTP Section Over-----------------------------*/
});
