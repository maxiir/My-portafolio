import nodemailer from "nodemailer";

const controller = {};

controller.sendEmail = (req, res) => {
  const { client, phone, emailClient, consulta } = req.body;
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "maxirucci2009@live.com.ar",
      pass: "Microsoft1234",
    },
  });

  const configEmail = {
    from: "maxirucci2009@live.com.ar", //de quien...
    to: "maxiirucci@gmail.com", //para quien...
    subject: "consulta desde portafolio web",
    html: `<h1>Hola!, tengo una consulta!</h1><p>mi nombre es: ${client}</br> consulta:  ${consulta} </br> mi numero de telefono: ${phone} </br> correo: ${emailClient} </p>`,
  };

  transporter.sendMail(configEmail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email enviado! ${info.response}`);
    }
  });
};

export default controller;
