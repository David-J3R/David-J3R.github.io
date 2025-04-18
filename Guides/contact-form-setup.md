# Contact Form Setup Guide

## Overview
This guide explains how to set up and customize the contact form on your website using EmailJS, a client-side email sending service that doesn't require a backend server.

## Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which is sufficient for most personal websites

## Step 2: Set Up an Email Service
1. Log in to your EmailJS dashboard
2. Go to "Email Services" and click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Give your service a name (e.g., "personal_gmail") and save it
6. Note down the **Service ID** for later use NOTE Service ID: service_deggis6

## Step 3: Create an Email Template
1. In the EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person sending the message
   - `{{from_email}}` - The email address of the sender
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The content of the message
4. Example template content:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
5. Save your template and note down the **Template ID** NOTE Template ID: template_mjdq41a

## Step 4: Get Your Public Key
1. In the EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your **Public Key** NOTE Public Key: rhp_WIlDhrw72roVK

## Step 5: Update Your Website Code
1. Open the `contact.js` file in your website directory
2. Replace the following placeholders with your actual values:
   - Replace `'YOUR_PUBLIC_KEY'` with your EmailJS Public Key
   - Replace `'YOUR_SERVICE_ID'` with your Service ID from Step 2
   - Replace `'YOUR_TEMPLATE_ID'` with your Template ID from Step 3

## Step 6: Test Your Contact Form
1. Open your website and navigate to the contact page
2. Fill out the form with test information
3. Submit the form and verify that:
   - You receive the email at your address
   - The success notification appears on the website

## Customization Options

### Changing Notification Styles
You can customize the appearance of success/error notifications by modifying the CSS in the `contact.html` file:

```css
.notification-container {
    /* Modify these properties to change the notification appearance */
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Modifying Form Validation
To change validation rules or error messages, edit the `validateForm()` function in `contact.js`.

### Changing Email Template
You can modify your email template in the EmailJS dashboard at any time. The changes will take effect immediately without needing to update your website code.

## Limitations of Client-Side Email Sending

1. **Monthly Limits**: The free EmailJS plan has a limit of 200 emails per month. For higher volume, you'll need a paid plan.

2. **Spam Concerns**: Emails sent via client-side services may have a higher chance of being marked as spam compared to server-side solutions.

3. **Security**: Since the code runs in the browser, your EmailJS public key is visible to users. While this doesn't allow others to send emails from your personal address, it could potentially be used to consume your monthly quota.

4. **No File Attachments**: The current implementation doesn't support file uploads. Adding this would require additional configuration.

5. **Dependency on Third-Party Service**: Your contact form relies on EmailJS's availability and terms of service.

## Troubleshooting

- **Emails Not Receiving**: Check your spam folder and verify your EmailJS service is properly connected
- **Form Submission Errors**: Check the browser console for any JavaScript errors
- **Rate Limiting**: If you exceed the free tier limits, you'll need to upgrade your EmailJS plan

For more information and advanced configuration options, visit the [EmailJS documentation](https://www.emailjs.com/docs/).