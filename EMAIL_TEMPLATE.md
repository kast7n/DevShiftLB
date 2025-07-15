# EmailJS Template Configuration

## Template for Contact Form

Use this template in your EmailJS dashboard to format the emails received from the contact form.

### Template Name: `New Project Inquiry`

### Template Content (HTML):

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #495057;
        }
        .value {
            margin-top: 5px;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
            border-left: 4px solid #007bff;
        }
        .project-details {
            margin-top: 5px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 4px;
            border-left: 4px solid #007bff;
            white-space: pre-wrap;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Project Inquiry</h2>
        <p>You have received a new project inquiry from your website.</p>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">{{fullName}}</div>
        </div>
        
        <div class="field">
            <div class="label">Email:</div>
            <div class="value">{{email}}</div>
        </div>
        
        <div class="field">
            <div class="label">Phone Number:</div>
            <div class="value">{{phoneNumber}}</div>
        </div>
        
        <div class="field">
            <div class="label">Project Details:</div>
            <div class="project-details">{{projectDetails}}</div>
        </div>
    </div>
</body>
</html>
```

### Template Content (Plain Text):

```
New Project Inquiry

You have received a new project inquiry from your website.

Full Name: {{fullName}}

Email: {{email}}

Phone Number: {{phoneNumber}}

Project Details:

{{projectDetails}}
```

### Template Variables Used:

- `{{fullName}}` - The full name from the contact form
- `{{email}}` - The email address from the contact form  
- `{{phoneNumber}}` - The phone number from the contact form
- `{{projectDetails}}` - The message/project details from the contact form

### Setup Instructions:

1. Log in to your EmailJS dashboard (https://www.emailjs.com/)
2. Go to Email Templates
3. Create a new template or edit your existing template (template_1mao6jn)
4. Use the HTML content above for rich formatting, or the plain text version for simple emails
5. Make sure the template variables match exactly: `{{fullName}}`, `{{email}}`, `{{phoneNumber}}`, `{{projectDetails}}`
6. Test the template with sample data
7. Update your `.env` file with the correct template ID if you created a new one

### Environment Variables:

Make sure your `.env` file has the correct values:

```
VITE_EMAILJS_SERVICE_ID=service_2btqqtg
VITE_EMAILJS_TEMPLATE_ID=template_1mao6jn
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Note: You need to replace `your_actual_public_key` with your real EmailJS public key from your account settings.
