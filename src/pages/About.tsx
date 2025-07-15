import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  Code, 
  Brain,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
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

  const coreValues = [
    {
      icon: <Target size={48} />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards and attention to detail in all our deliverables.'
    },
    {
      icon: <Users size={48} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients to achieve shared goals and create lasting partnerships.'
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends and continuously innovate to provide cutting-edge solutions that drive success.'
    },
    {
      icon: <Shield size={48} />,
      title: 'Security',
      description: 'Security is paramount in everything we do. We implement robust security measures to protect your data and digital assets.'
    }
  ];

  const expertiseDomains = [
    {
      icon: <Code size={48} />,
      title: 'Application Development',
      description: 'We specialize in creating custom web and mobile applications using modern frameworks and technologies. Our development process focuses on scalability, performance, and user experience, ensuring that your applications not only meet current needs but can grow with your business.',
      technologies: ['React', 'Node.js', 'Python', 'React Native', 'TypeScript', 'Next.js']
    },
    {
      icon: <Shield size={48} />,
      title: 'Cybersecurity',
      description: 'Our cybersecurity expertise encompasses vulnerability assessments, penetration testing, security architecture design, and incident response. We help organizations build robust defense mechanisms against evolving cyber threats while maintaining operational efficiency.',
      technologies: ['Security Audits', 'Penetration Testing', 'Threat Analysis', 'Compliance', 'Risk Assessment', 'Incident Response']
    },
    {
      icon: <Brain size={48} />,
      title: 'Artificial Intelligence',
      description: 'We leverage AI and machine learning to create intelligent solutions that automate processes, provide predictive insights, and enhance decision-making capabilities. Our AI solutions are tailored to solve real business problems and drive measurable results.',
      technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Data Analytics', 'Predictive Modeling', 'Automation']
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="about-hero-title">
              About DevShiftLB
            </motion.h1>
            <motion.p variants={fadeInUp} className="about-hero-subtitle">
              Your trusted partner for comprehensive technology solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section about-intro">
        <div className="container">
          <motion.div 
            className="intro-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Our Mission</h2>
            <p>
              DevShiftLB is a dedicated development team specializing in comprehensive tech solutions 
              for cutting-edge advancement and security. We are committed to delivering robust, scalable, 
              and secure technology solutions that empower businesses to thrive in the digital age.
            </p>
            <p>
              Our team combines deep technical expertise with a passion for innovation, ensuring that 
              every project we undertake not only meets but exceeds our clients' expectations. We believe 
              in building long-term partnerships based on trust, quality, and mutual success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section core-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>
          <motion.div 
            className="values-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div key={index} className="value-card" variants={fadeInUp}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section expertise-detailed">
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
              Deep specialization in three core domains that drive modern digital transformation
            </p>
          </motion.div>
          <motion.div 
            className="expertise-detailed-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {expertiseDomains.map((domain, index) => (
              <motion.div key={index} className="expertise-detailed-card" variants={fadeInUp}>
                <div className="expertise-detailed-icon">{domain.icon}</div>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <div className="technologies">
                  <h4>Key Technologies & Services:</h4>
                  <div className="tech-tags">
                    {domain.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Work with Us?</h2>
            <p>
              Discover how our expertise and commitment to excellence can help transform your business 
              with innovative technology solutions.
            </p>
            <div className="cta-actions">
              <Link to="/team" className="btn btn-primary btn-large">
                Meet Our Team
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
