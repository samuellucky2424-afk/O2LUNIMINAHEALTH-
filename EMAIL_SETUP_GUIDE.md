# EmailJS Setup Guide for LuminaHealth

## Overview
The admin approval system sends emails to applicants when their job applications are approved. To enable this feature, you need to configure EmailJS.

## Steps to Set Up EmailJS

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email

### 2. Get Your Credentials
1. Log in to EmailJS Dashboard
2. Go to **Account** > **API Keys**
3. Copy your **Public Key**
4. Go to **Email Services** and create/select a service
5. Note the **Service ID**
6. Go to **Email Templates** and create a template
7. Note the **Template ID**

### 3. Template Setup
Create an EmailJS template with these variables:

**Template Content Example:**
```
Subject: Job Application Approved - {{to_name}}

Dear {{to_name}},

Great news! Your job application has been approved!

**Position**: {{approved_position}}
**Department**: {{department}}
**Start Date**: {{start_date}}
**Salary/Fees**: {{amount}}

{{notes}}

Best regards,
LuminaHealth Hospital Team
```

**Required Template Variables:**
- `to_name` - Applicant's full name
- `to_email` - Applicant's email address
- `approved_position` - Approved job position
- `department` - Department assignment
- `start_date` - Employment start date
- `amount` - Salary or compensation
- `notes` - Additional notes from admin

### 4. Configure Environment Variables

In your Replit project, add these secrets:

1. Click **Tools** > **Secrets**
2. Add the following:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### 5. Test Email Sending
1. Go to Admin Dashboard (`/#/admin/login`)
2. Username: `luckymmc`
3. Password: `081648Al@`
4. Navigate to **Job Applications** tab
5. Click **Approve** on a pending application
6. Fill in the approval details
7. Click **Confirm Approval & Send Email**
8. Check if the applicant receives the email

## Troubleshooting

### Email Not Sending
1. **Check console logs** - Look for error messages in browser dev tools
2. **Verify credentials** - Ensure all three environment variables are correctly set
3. **Check template** - Verify template ID is correct in EmailJS dashboard
4. **Service verification** - Confirm the email service is verified in EmailJS
5. **Rate limits** - EmailJS free tier has a rate limit; wait a moment and retry

### Missing Variables
If you see "undefined" in emails, update your template variables to match the names exactly:
- `to_name` ✓
- `to_email` ✓
- `approved_position` ✓
- `department` ✓
- `start_date` ✓
- `amount` ✓
- `notes` ✓

### Testing EmailJS Connection
You can test directly on EmailJS dashboard:
1. Go to your template
2. Click **Test It**
3. Fill in sample values
4. Click **Send**

## Alternative: Manual Email
If EmailJS is not configured, admins can:
1. Note the applicant's email address from the application
2. Send approval email manually
3. The system will still save the approval status in the database

## Free Plan Limits
- EmailJS Free: 200 emails/month
- No credit card required
- Upgradeable as needed

## Support
- EmailJS Docs: https://www.emailjs.com/docs/
- Contact EmailJS Support: support@emailjs.com
