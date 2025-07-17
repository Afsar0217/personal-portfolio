import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email configuration
const createTransporter = () => {
  // For Gmail, you'll need to use App Password instead of regular password
  // Go to Google Account settings > Security > 2-Step Verification > App passwords
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com', // Your Gmail address
      pass: process.env.EMAIL_PASS || 'your-app-password'     // Your Gmail App Password
    }
  });
};

export const sendContactEmail = async (data: EmailData): Promise<void> => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"${data.name}" <${data.email}>`, // Sender's name and email
    to: 'afsarafrah@gmail.com',              // Your email address
    replyTo: data.email,                     // Reply to sender's email
    subject: data.subject || 'New Contact Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject || 'No subject provided'}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #334155; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #475569;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Note:</strong> You can reply directly to this email to respond to ${data.name}.
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject || 'No subject provided'}

Message:
${data.message}

You can reply directly to this email to respond to ${data.name}.
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to afsarafrah@gmail.com');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};