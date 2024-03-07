// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async (req: { method: string; body: { name: any; prenom: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; error?: unknown; }): any; new(): any; }; end: { (): any; new(): any; }; }; }) => {
  if (req.method === 'POST') {
    const { name, prenom, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: 'angelo321.lagomarsino123@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name} ${prenom}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ status: 'Email enviado' });
    } catch (error) {
      console.error('Error al enviar email', error);
      return res.status(500).json({ status: 'Error al enviar email', error });
    }
  } else {
    return res.status(405).end();
  }
};
