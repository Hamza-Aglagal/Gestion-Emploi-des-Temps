const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text, pdfPath } = req.body; // Récupérez les données de l'e-mail et le chemin du fichier PDF

  try {
    // Créez le transporter avec les informations de votre compte de messagerie
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'itshamzaaglagal@gmail.com',
        pass: 'fyww ocwp jgcx ipzy',
      },
      secure: true,
      port: 587,
    });

    // Lisez le fichier PDF et convertissez-le en tampon binaire
    const pdfData = fs.readFileSync(pdfPath);
    const pdfBuffer = Buffer.from(pdfData, 'binary');

    // Créez les options de l'e-mail avec le fichier PDF en pièce jointe
    const mailOptions = {
      from: 'itshamzaaglagal@gmail.com',
      to,
      subject,
      text,
      attachments: [
        {
          filename: 'monFichier.pdf',
          content: pdfBuffer,
        },
      ],
    };

    // Envoyez l'e-mail avec le transporter
    await transporter.sendMail(mailOptions);
    // Envoyez une réponse JSON avec un message de succès
    res.json({ success: true, message: 'E-mail envoyé avec le PDF en pièce jointe' });
  } catch (error) {
    // En cas d'erreur, affichez-la dans la console et envoyez une réponse JSON avec un message d'échec
    console.error('Erreur lors de l'envoi de l'e-mail :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l'envoi de l'e-mail', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});










// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const puppeteer = require('puppeteer');
// // const htmlToPdf = require('html2pdf.js');


// const app = express();

// app.use(express.json());
// app.use(cors());

// // app.use('/static', express.static('public/static'));



// app.post('/send-email', async (req, res) => {
//   const { to, subject, text, data } = req.body;

//   console.log('Received email data:', req.body);

 

//   try {

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'itshamzaaglagal@gmail.com',
//         pass: 'fyww ocwp jgcx ipzy',
//       },

//       secure: true,
//       port: 587,

//     });

//     const pdfData = data.output();
//     const pdfBuffer = Buffer.from(pdfData, 'binary');

//     const mailOptions = {
//       from: 'itshamzaaglagal@gmail.com',
//       to,
//       subject,
//       text,
//       attachments: [
//         {
//           filename: 'timeTable.pdf',
//           content: pdfBuffer,
//         },
//       ],
//     };

//     await transporter.sendMail(mailOptions);
//     res.json({ success: true, message: 'Email sent with PDF attached' });

//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
//   }



// });




// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });








