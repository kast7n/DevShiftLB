# DevShiftLB Portfolio Website

A modern, professional portfolio website for DevShiftLB - a dedicated development team specializing in comprehensive tech solutions for cutting-edge advancement and security.

## 🌟 Features

- **Modern Design**: Clean, professional, and technologically advanced aesthetic
- **Responsive**: Fully responsive design optimized for all devices
- **Fast Performance**: Built with Vite and optimized for speed
- **Smooth Animations**: Engaging animations using Framer Motion
- **TypeScript**: Type-safe development with TypeScript
- **Professional Navigation**: Intuitive navigation with active states
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🚀 Pages & Sections

### Home Page
- Hero section with compelling messaging
- Our Expertise showcase (Application Development, Cybersecurity, AI)
- Services overview
- Why Choose DevShiftLB section
- Call-to-action sections

### About Us Page
- Company mission and introduction
- Core values (Excellence, Collaboration, Innovation, Security)
- Detailed expertise breakdown
- Technology stacks and services

### Services Page
- Comprehensive service offerings:
  - Custom Software Development
  - Cloud Solutions
  - Data Analytics & AI/ML Solutions
  - Cybersecurity Consulting
  - Technology Consulting
- Development process overview
- Key benefits and features

### Team Page
- Team member profiles
- Skills and expertise showcase
- Team statistics
- Company values and culture

### Contact Page
- Contact form with service selection
- Company contact information
- FAQ section
- Success/confirmation messaging

## 🛠 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Color Palette
- **Primary**: #2563eb (Blue)
- **Primary Dark**: #1d4ed8
- **Secondary**: #64748b (Slate)
- **Accent**: #06b6d4 (Cyan)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600 weight
- **Body**: 400 weight
- **Medium**: 500 weight

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Guidelines

### Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── sections/
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   └── Contact.tsx
└── assets/
```

## Development Guidelines

- Use TypeScript for all new files
- Follow React functional component patterns with hooks
- Use CSS Variables for consistent theming
- Implement proper error boundaries and loading states
- Write clean, readable, and maintainable code
- Use semantic HTML and ensure accessibility

## Code Style

- Use arrow functions for React components
- Prefer const assertions for object literals
- Use proper TypeScript types and interfaces
- Follow consistent naming conventions (camelCase for variables, PascalCase for components)

## 📧 EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails directly from the frontend. To set up the contact form:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{to_name}}` - Recipient name (DevShiftLB Team)
   - `{{from_name}}` - Sender name
   - `{{from_email}}` - Sender email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{reply_to}}` - Reply-to email

### 2. Configure Environment Variables
Create a `.env` file in the root directory with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. EmailJS Template Example
```html
Subject: New Contact Form Submission - {{subject}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
DevShiftLB Website
```

### 4. Testing the Contact Form
1. Fill out the contact form on your website
2. Check your configured email for the message
3. Verify all template variables are populated correctly

## 📞 Contact

- **Email**: contact@devshiftlb.com
- **LinkedIn**: [DevShiftLB](https://linkedin.com/company/devshiftlb)
- **Location**: Lebanon

---

Built with ❤️ by DevShiftLB Team
