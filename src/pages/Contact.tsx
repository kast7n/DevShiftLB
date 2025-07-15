import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader, Copy } from 'lucide-react';
import { sendEmail, initializeEmailJS } from '../utils/emailService';
import { fallbackContactMethods } from '../utils/fallbackContact';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        setSubmitError('Failed to send message. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFallbackContact = () => {
    const mailtoLink = fallbackContactMethods.generateMailtoLink(formData);
    window.location.href = mailtoLink;
  };

  const handleCopyToClipboard = async () => {
    try {
      await fallbackContactMethods.copyToClipboard(formData);
      alert('Contact details copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      detail: 'devshiftlb@gmail.com',
      link: 'mailto:devshiftlb@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      detail: 'Lebanon',
      link: null
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      detail: '+961 76 816 079',
      link: 'tel:+96176816079'
    }
  ];

  const serviceOptions = [
    'Custom Software Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'Cybersecurity Consulting',
    'Technology Consulting',
    'General Inquiry'
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="contact-hero-title">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeInUp} className="contact-hero-subtitle">
              Ready to start your project? Let's discuss how we can help you achieve your technology goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div 
              className="contact-info"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Let's Start a Conversation</motion.h2>
              <motion.p variants={fadeInUp}>
                We're here to help you transform your ideas into reality. Whether you have a specific 
                project in mind or need guidance on your technology strategy, our team is ready to assist.
              </motion.p>

              <motion.div className="contact-details" variants={staggerContainer}>
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="contact-detail" variants={fadeInUp}>
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="contact-link">{info.detail}</a>
                      ) : (
                        <span>{info.detail}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="contact-features" variants={fadeInUp}>
                <h3>What to Expect:</h3>
                <ul>
                  <li>
                    <CheckCircle size={16} />
                    <span>Free initial consultation</span>
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    <span>Detailed project proposal</span>
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    <span>Transparent pricing</span>
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    <span>24-48 hour response time</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Send us a Message</h3>
                  
                  {submitError && (
                    <div className="error-message">
                      <AlertCircle size={20} />
                      <div className="error-content">
                        <span>{submitError}</span>
                        <div className="fallback-options">
                          <button 
                            type="button" 
                            className="btn-fallback"
                            onClick={handleFallbackContact}
                          >
                            Open Email Client
                          </button>
                          <button 
                            type="button" 
                            className="btn-fallback"
                            onClick={handleCopyToClipboard}
                          >
                            <Copy size={16} />
                            Copy Details
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+961 XX XXX XXX"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="spinner" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. We've received your message and will get back to you 
                    within 24-48 hours.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section contact-faq">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <motion.div 
            className="faq-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="faq-item" variants={fadeInUp}>
              <h4>How long does a typical project take?</h4>
              <p>
                Project timelines vary based on complexity and scope. Simple websites may take 2-4 weeks, 
                while enterprise applications can take 3-6 months. We provide detailed timelines during consultation.
              </p>
            </motion.div>

            <motion.div className="faq-item" variants={fadeInUp}>
              <h4>Do you offer ongoing support?</h4>
              <p>
                Yes, we provide comprehensive post-launch support including maintenance, updates, 
                and technical assistance to ensure your solution continues to perform optimally.
              </p>
            </motion.div>

            <motion.div className="faq-item" variants={fadeInUp}>
              <h4>What technologies do you work with?</h4>
              <p>
                We specialize in modern technologies including React, Node.js, Python, cloud platforms, 
                AI/ML frameworks, and cybersecurity tools. We choose the best tech stack for each project.
              </p>
            </motion.div>

            <motion.div className="faq-item" variants={fadeInUp}>
              <h4>How do you ensure project security?</h4>
              <p>
                Security is integrated throughout our development process. We follow industry best practices, 
                conduct security audits, and implement robust protection measures for all projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
