import emailjs from '@emailjs/browser';

/**
 * EmailJS service for sending automated notifications.
 */

const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const sendApprovalEmail = async (applicantData: any, approvalData: any) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('EmailJS credentials missing in environment variables');
    return false;
  }

  try {
    const templateParams = {
      to_name: applicantData.fullName,
      to_email: applicantData.email,
      approved_position: approvalData.approvedPosition,
      amount: approvalData.amount,
      start_date: approvalData.startDate,
      department: approvalData.department,
      notes: approvalData.notes,
      applicant_photo: typeof applicantData.passportPhoto === 'string' ? applicantData.passportPhoto : ''
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};