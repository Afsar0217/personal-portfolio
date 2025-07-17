# Email Setup Instructions

## 📧 Setting up Gmail for Contact Form

To enable email functionality for your contact form, you need to configure Gmail with an App Password.

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification"
4. Follow the steps to enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. After enabling 2-Factor Authentication, go back to Security settings
2. Under "Signing in to Google", click on "App passwords"
3. Select "Mail" as the app and "Other (Custom name)" as the device
4. Enter "Portfolio Contact Form" as the custom name
5. Click "Generate"
6. Copy the 16-character app password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:
   ```
   EMAIL_USER=afsarafrah@gmail.com
   EMAIL_PASS=your-16-character-app-password-here
   ```
3. Save the file

### Step 4: Test the Contact Form
1. Restart your server: `npm start`
2. Go to your website's contact section
3. Fill out the form and submit
4. Check your email (afsarafrah@gmail.com) for the message

## 🔧 How It Works

When someone submits the contact form:
1. The form data is validated and saved to the database
2. An email is sent to `afsarafrah@gmail.com` with:
   - Sender's name and email
   - Subject line
   - Message content
   - Professional HTML formatting
3. The "Reply-To" field is set to the sender's email, so you can reply directly

## 🚨 Important Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already added to `.gitignore`
- Keep your app password secure and don't share it
- If you suspect the password is compromised, generate a new one

## 📝 Email Template

The emails you receive will be professionally formatted with:
- Clear contact details
- Highlighted message content
- Easy-to-read HTML layout
- Plain text fallback

## 🔍 Troubleshooting

If emails aren't working:
1. Check that 2-Factor Authentication is enabled
2. Verify the app password is correct (no spaces)
3. Make sure the EMAIL_USER matches your Gmail address
4. Check server logs for error messages
5. Ensure your Gmail account allows less secure apps (though app passwords are preferred)

## 📞 Support

If you need help setting this up, the configuration is ready to work once you add your Gmail app password to the `.env` file.