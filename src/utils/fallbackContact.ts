// Fallback contact methods when EmailJS is not available
export const fallbackContactMethods = {
  email: 'contact@devshiftlb.com',
  phone: '+961 XX XXX XXX',
  
  // Generate mailto link with form data
  generateMailtoLink: (formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    const subject = encodeURIComponent(`New Project Inquiry: ${formData.subject}`);
    const body = encodeURIComponent(
      `New Project Inquiry\n\n` +
      `You have received a new project inquiry from your website.\n\n` +
      `Full Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Phone Number: ${formData.phone || 'Not provided'}\n\n` +
      `Project Details:\n\n${formData.message}\n\n` +
      `---\nSent from DevShiftLB Contact Form`
    );
    
    return `mailto:contact@devshiftlb.com?subject=${subject}&body=${body}`;
  },
  
  // Copy form data to clipboard
  copyToClipboard: (formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    const text = 
      `New Project Inquiry\n` +
      `===================\n\n` +
      `You have received a new project inquiry from your website.\n\n` +
      `Full Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Phone Number: ${formData.phone || 'Not provided'}\n\n` +
      `Project Details:\n\n${formData.message}`;
    
    return navigator.clipboard.writeText(text);
  }
};
