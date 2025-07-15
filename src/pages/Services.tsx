import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Database,
  Lock,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Code size={48} />,
      title: 'Custom Software Development',
      description: 'End-to-end software development services tailored to your specific business needs and requirements.',
      features: [
        'Web Application Development',
        'Mobile App Development (iOS & Android)',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Progressive Web Applications (PWA)'
      ],
      benefits: [
        'Scalable and maintainable code architecture',
        'Cross-platform compatibility',
        'Performance optimization',
        'Ongoing support and maintenance'
      ],
      subIcon: <Globe size={24} />
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services to help you leverage the power of cloud computing for enhanced scalability and efficiency.',
      features: [
        'Cloud Architecture Design',
        'Migration to Cloud Platforms',
        'DevOps & CI/CD Implementation',
        'Infrastructure as Code (IaC)',
        'Cloud Security & Compliance',
        'Performance Monitoring & Optimization'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Enhanced scalability and flexibility',
        'Improved disaster recovery',
        'Automated deployment processes'
      ],
      subIcon: <Smartphone size={24} />
    },
    {
      icon: <Brain size={48} />,
      title: 'Data Analytics & AI/ML Solutions',
      description: 'Advanced analytics and artificial intelligence solutions to unlock insights and automate decision-making processes.',
      features: [
        'Machine Learning Model Development',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Data Pipeline Development',
        'Business Intelligence Dashboards'
      ],
      benefits: [
        'Data-driven decision making',
        'Process automation and efficiency',
        'Predictive insights for better planning',
        'Competitive advantage through AI'
      ],
      subIcon: <Database size={24} />
    },
    {
      icon: <Shield size={48} />,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive cybersecurity services to protect your digital assets and ensure regulatory compliance.',
      features: [
        'Security Vulnerability Assessments',
        'Penetration Testing',
        'Security Architecture Design',
        'Incident Response Planning',
        'Compliance Auditing (GDPR, HIPAA, etc.)',
        'Security Awareness Training'
      ],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance assurance',
        'Risk mitigation strategies',
        '24/7 security monitoring'
      ],
      subIcon: <Lock size={24} />
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Technology Consulting',
      description: 'Strategic technology guidance to help you make informed decisions and optimize your technology investments.',
      features: [
        'Technology Strategy Development',
        'Digital Transformation Planning',
        'Technology Stack Evaluation',
        'Architecture Reviews & Optimization',
        'Process Improvement Consulting',
        'Innovation Workshops'
      ],
      benefits: [
        'Strategic technology roadmap',
        'Optimized technology investments',
        'Improved operational efficiency',
        'Innovation-driven growth'
      ],
      subIcon: <Settings size={24} />
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="services-hero-title">
              Our Services
            </motion.h1>
            <motion.p variants={fadeInUp} className="services-hero-subtitle">
              Comprehensive technology solutions designed to drive your business forward
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From custom software development to AI solutions, we provide end-to-end technology services 
              that help businesses thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section services-detailed">
        <div className="container">
          <motion.div 
            className="services-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                variants={fadeInUp}
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-title-section">
                    <h3>{service.title}</h3>
                    <div className="service-sub-icon">{service.subIcon}</div>
                  </div>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-content">
                  <div className="service-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <CheckCircle size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>
                          <ArrowRight size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section services-process">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              We follow a structured approach to ensure successful project delivery and client satisfaction
            </p>
          </motion.div>
          
          <motion.div 
            className="process-steps"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">1</div>
              <h4>Discovery & Analysis</h4>
              <p>We begin by understanding your business needs, objectives, and technical requirements.</p>
            </motion.div>
            
            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">2</div>
              <h4>Strategy & Planning</h4>
              <p>We develop a comprehensive strategy and project plan tailored to your specific goals.</p>
            </motion.div>
            
            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">3</div>
              <h4>Development & Implementation</h4>
              <p>Our expert team executes the plan with regular updates and milestone deliveries.</p>
            </motion.div>
            
            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">4</div>
              <h4>Testing & Optimization</h4>
              <p>Rigorous testing ensures quality, performance, and security before deployment.</p>
            </motion.div>
            
            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">5</div>
              <h4>Launch & Support</h4>
              <p>We provide ongoing support and maintenance to ensure continued success.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your project requirements and explore how our services can help you achieve your technology goals.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Request Consultation
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
