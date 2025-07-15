import emailjs from '@emailjs/browser';

// EmailJS configuration
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(emailConfig.publicKey);
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    const templateParams = {
      to_name: 'DevShiftLB Team',
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      project_details: formData.message,
      reply_to: formData.email,
      // Template variables for the email template
      fullName: formData.name,
      email: formData.email,
      phoneNumber: formData.phone,
      projectDetails: formData.message,
    };

    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
