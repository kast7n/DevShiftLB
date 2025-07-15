import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Award, BookOpen, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Team.css';

const Team: React.FC = () => {
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

  const teamMembers = [
 {
  name: 'Ali Rida Darsa',
  role: 'Team Leader & Software Engineer',
  bio: 'Full-stack developer passionate about modern web technologies and leading high-performing teams. Expertise in software architecture and delivering robust solutions.',
  skills: [
    'Team Leadership',
    'Spring Boot',
    'ASP.NET Core',
    'React.js',
    'TypeScript',
    'Azure',
    'SQL',
    'Git & DevOps',
    'Agile Methodologies',
    'Task Management'
  ],
  image: 'src/assets/Team/Darsa.jpg', // Placeholder for professional headshot
  linkedin: 'https://www.linkedin.com/in/ali-rida-darsa/',
  github: 'https://github.com/kast7n',
  email: 'alialridaaldarsa@gmail.com'
},
{
  name: 'Ali Awela',
  role: 'Lead Developer',
  bio: 'Experienced Lead Developer with a strong background in full-stack development, specializing in modern web frameworks and robust API design. Passionate about guiding teams and delivering high-quality software solutions.',
  skills: [
    'Lead Developer',
    'ASP.NET MVC',
    'Flask',
    'React.js',
    'TypeScript',
    'SQL Databases',
    'Firebase',
    'Git & GitHub',
    'RESTful APIs',
    'Agile Methodologies'
  ],
  image: 'src/assets/Team/Awela.jpg', // Placeholder for professional headshot
  linkedin: 'https://www.linkedin.com/in/ali-awela/',
  github: 'https://github.com/aliawela',
  email: 'ali123awela@gmail.com'
},
{
  name: 'Mohammad Ghoul',
  role: 'Security Specialist & Backend Engineer',
  bio: 'Dedicated Security Specialist and Backend Engineer with expertise in secure application development, network security, and vulnerability assessment. Focused on building robust and resilient systems.',
  skills: [
    'Security Specialist',
    'Backend Engineering',
    'Spring Boot',
    'Spring Security',
    'Python (Flask)',
    'RESTful APIs',
    'Vulnerability Assessment (OWASP)',
    'Network Security (Firewall Rules, Cisco)',
    'Docker',
    'Git & GitHub'
  ],
  image: 'src/assets/Team/Ghoul.jpg', // Placeholder for professional headshot
  linkedin: 'https://www.linkedin.com/in/mohammad-ghoulcs/',
  github: 'https://github.com/ghoul8182',
  email: 'mohammadghoul112@gmail.com'
},
{
  name: 'Wael Ibrahim',
  role: 'Full Stack Developer & Social Media Manager',
  bio: 'Versatile Full Stack Developer with expertise in web development and a knack for social media management. Passionate about creating engaging user experiences and robust backend solutions.',
  skills: [
    'Full Stack Development',
    'Social Media Management',
    'React.js',
    'ASP.NET (MVC, Web API)',
    'C#',
    'Python (Flask)',
    'SQL Databases',
    'RESTful APIs',
    'Git & GitHub',
    'Agile Methodologies'
  ],
  image: 'src/assets/Team/Wael.jpg', // Placeholder for professional headshot
  linkedin: 'https://www.linkedin.com/in/waelibrahimcs/',
  github: 'https://github.com/Wael-Ib',
  email: 'ibrahim.wael.lb@gmail.com'
},
{
  name: 'Ahmad Taher',
  role: 'Backend Developer',
  bio: 'Dedicated Backend Developer with a strong focus on building robust and scalable server-side applications. Proficient in various frameworks and passionate about efficient data management and API design.',
  skills: [
    'Backend Development',
    'ASP.NET (MVC, Web API)',
    'C#',
    'Java',
    'Python (Flask)',
    'SQL Databases',
    'RESTful APIs',
    'Git & GitHub',
    'Agile Methodologies',
    'API Testing (Postman, Swagger)'
  ],
  image: 'src/assets/Team/Taher.jpg', // Placeholder for professional headshot
  linkedin: 'https://www.linkedin.com/in/ahmad-taher-748662297/',
  github: 'https://github.com/AhmadKamelTaher',
  email: 'ahmadtaher03112003@gmail.com'
}

    // Note: Additional team members can be added here as the team grows
  ];

  const teamStats = [
    {
      icon: <Code size={32} />,
      number: '5+',
      label: 'Technologies Mastered'
    },
    {
      icon: <Award size={32} />,
      number: '100%',
      label: 'Client Satisfaction'
    },
    {
      icon: <BookOpen size={32} />,
      number: '24/7',
      label: 'Learning & Innovation'
    }
  ];

  return (
    <div className="team">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <motion.div 
            className="team-hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="team-hero-title">
              Meet the DevShiftLB Team
            </motion.h1>
            <motion.p variants={fadeInUp} className="team-hero-subtitle">
              Dedicated professionals committed to delivering exceptional technology solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section team-stats">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamStats.map((stat, index) => (
              <motion.div key={index} className="stat-card" variants={fadeInUp}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section team-members">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Get to know the talented individuals behind DevShiftLB's success
            </p>
          </motion.div>

          <motion.div 
            className="members-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="member-card" variants={fadeInUp}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link">
                        <Github size={20} />
                      </a>
                      <a href={`mailto:${member.email}`} className="social-link">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-skills">
                    <h4>Key Skills:</h4>
                    <div className="skills-tags">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section team-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              Our team is united by shared values and a common vision for excellence
            </p>
          </motion.div>

          <motion.div 
            className="values-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="value-item">
              <h3>Continuous Learning</h3>
              <p>
                We stay current with the latest technologies and industry best practices to deliver 
                cutting-edge solutions that meet evolving business needs.
              </p>
            </div>

            <div className="value-item">
              <h3>Quality First</h3>
              <p>
                Every project we undertake is executed with meticulous attention to detail and a 
                commitment to delivering robust, reliable, and maintainable solutions.
              </p>
            </div>

            <div className="value-item">
              <h3>Client Partnership</h3>
              <p>
                We believe in building strong partnerships with our clients, understanding their unique 
                challenges, and working collaboratively to achieve their goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section join-us">
        <div className="container">
          <motion.div 
            className="join-content"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Interested in Working with Us?</h2>
            <p>
              We're always looking for talented individuals who share our passion for technology 
              and commitment to excellence. Get in touch to explore collaboration opportunities.
            </p>
            <div className="join-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
