import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Brain, 
  Users, 
  Clock, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
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

  const expertise = [
    {
      icon: <Code size={48} />,
      title: 'Application Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies and best practices.'
    },
    {
      icon: <Shield size={48} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.'
    },
    {
      icon: <Brain size={48} />,
      title: 'Artificial Intelligence',
      description: 'Advanced AI and machine learning solutions to automate processes and drive intelligent decision-making.'
    }
  ];

  const services = [
    'Custom Software Development',
    'Cloud Solutions & Deployment',
    'AI & Machine Learning',
    'Cybersecurity Consulting',
    'Technology Strategy'
  ];

  const whyChooseUs = [
    {
      icon: <Users size={32} />,
      title: 'Expert Team',
      description: 'Dedicated professionals with deep expertise in modern technologies'
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Delivery',
      description: 'We value your time and deliver projects on schedule without compromising quality'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensures robust, reliable solutions'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="hero-title">
              Comprehensive Tech Solutions for
              <span className="highlight"> Cutting-Edge Advancement</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle">
              DevShiftLB specializes in custom software development, cybersecurity, and AI solutions. 
              We're dedicated to delivering robust, scalable, and secure technology solutions that drive your business forward.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section expertise">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">
              We specialize in three core domains that drive modern digital transformation
            </p>
          </motion.div>
          <motion.div 
            className="expertise-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {expertise.map((item, index) => (
              <motion.div key={index} className="expertise-card" variants={fadeInUp}>
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section services-preview">
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
              Comprehensive technology services tailored to your business needs
            </p>
          </motion.div>
          <motion.div 
            className="services-list"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} className="service-item" variants={fadeInUp}>
                <CheckCircle size={20} className="service-check" />
                <span>{service}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="services-cta"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link to="/services" className="btn btn-primary">
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose DevShiftLB Section */}
      <section className="section why-choose">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Why Choose DevShiftLB?</h2>
            <p className="section-subtitle">
              We're committed to delivering exceptional results through innovation, quality, and collaboration
            </p>
          </motion.div>
          <motion.div 
            className="why-choose-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} className="why-choose-card" variants={fadeInUp}>
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how DevShiftLB can help you achieve your technology goals with our comprehensive solutions.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Your Project
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

export default Home;
