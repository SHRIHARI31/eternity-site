import { Component, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { Button } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-service',
  imports: [AccordionModule, Button,TabsModule],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  active = '0'
  accordionData = signal([
    {
      value: "0",
      title: "Final Year Training Program",
      description: "Our final-year training program is designed to bridge the gap between academic learning and real industry expectations. Students work on structured modules that cover planning, development, testing, and deployment. Each participant is guided through practical tasks that mimic real project workflows. We emphasize problem-solving, clean code practices, and professional documentation. By the end of the program, students gain the confidence and capability required for entry-level IT roles."
    },
    {
      value: "1",
      title: "Open Source Contribution Guidance",
      description: "This program helps students understand the complete open-source ecosystem and its importance in the tech world. We teach the fundamentals of Git, GitHub workflow, branching strategies, and collaborative code review processes. Students are guided step-by-step to identify issues, create patches, and submit meaningful contributions. We also introduce community guidelines, licensing, and communication etiquette. By participating, students build a strong portfolio that highlights practical, verifiable development experience."
    },
    {
      value: "2",
      title: "Technology & Tools Skill Development",
      description: "Our technology development track focuses on modern frameworks and tools used by leading IT companies. Students receive hands-on training in Angular, Node.js, Python, REST APIs, cloud platforms, and essential development utilities. We emphasize real-time problem solving through practical labs and project-based assignments. Participants also learn testing strategies, deployment techniques, version control, and debugging methods. This well-rounded approach ensures students are prepared for professional development environments."
    }
  ]);

  randdData = signal([
    {
      value: '0',
      label: 'AI Research',
      tabIcon: 'pi pi-microchip',
      iconGradient: 'from-purple-500 to-indigo-600',
      title: 'Artificial Intelligence',
      description: 'We focus on advanced research and development in artificial intelligence to create intelligent solutions that enhance business operations and decision-making.',
      checkpoints: [
        'Machine learning models for predictive analytics',
        'Automation frameworks for intelligent workflows',
        'Data-driven systems for efficient operations',
        'Scalable AI solutions for modern businesses'
      ],
      cardGradient: 'from-purple-100 to-indigo-100',
      cardBorder: 'border-purple-200',
      features: [
        { title: 'Innovation Focus', desc: 'Continuous experimentation and innovation in AI-powered tools' },
        { title: 'Real-World Solutions', desc: 'Adaptive systems that address practical business challenges' },
        { title: 'Measurable Value', desc: 'Reliable, scalable solutions delivering tangible results' }
      ]
    },
    {
      value: '1',
      label: 'Automation',
      tabIcon: 'pi pi-cog',
      iconGradient: 'from-blue-500 to-cyan-600',
      title: 'Advanced Automation',
      description: 'We specialize in research and development focused on advanced automation technologies that streamline business workflows and eliminate manual effort.',
      checkpoints: [
        'Intelligent workflow automation systems',
        'Precision task execution with reliability',
        'Real-time monitoring and process optimization',
        'Cost reduction through operational efficiency'
      ],
      cardGradient: 'from-blue-100 to-cyan-100',
      cardBorder: 'border-blue-200',
      features: [
        { title: 'Process Analysis', desc: 'Deep analysis of operational challenges and workflows' },
        { title: 'Smart Integration', desc: 'ML-powered automation with seamless integration' },
        { title: 'Long-term Efficiency', desc: 'Sustainable solutions driving continuous innovation' }
      ]
    },
    {
      value: '2',
      label: 'Security',
      tabIcon: 'pi pi-shield',
      iconGradient: 'from-emerald-500 to-teal-600',
      title: 'Web Security Protocols',
      description: 'We focus on research and development in cutting-edge web security, creating AI-driven systems that protect digital platforms from evolving threats.',
      checkpoints: [
        'Vulnerability identification and threat monitoring',
        'Real-time adaptive defense mechanisms',
        'ML-powered threat analytics and detection',
        'Data integrity and system resilience'
      ],
      cardGradient: 'from-emerald-100 to-teal-100',
      cardBorder: 'border-emerald-200',
      features: [
        { title: 'Advanced Protection', desc: 'Comprehensive security frameworks for digital platforms' },
        { title: 'Risk Minimization', desc: 'Automated detection preventing unauthorized access' },
        { title: 'Resilient Systems', desc: 'Safe, reliable digital environments for businesses' }
      ]
    }
  ]);
  
  serviceData = signal([
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/cloud.svg",
      title: "Cloud Solutions",
      description: "Secure and scalable cloud deployment, storage, and migration services for modern businesses."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/code-2.svg",
      title: "Web Development",
      description: "Responsive and high-performance websites built using modern frameworks and industry standards."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/smartphone.svg",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with smooth UI/UX and optimized performance."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/palette.svg",
      title: "UI/UX Design",
      description: "User-centered interface design focusing on simplicity, accessibility, and brand identity."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/shield-check.svg",
      title: "Cyber Security",
      description: "Protection against cyber threats through firewalls, audits, penetration testing, and monitoring."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/cpu.svg",
      title: "Custom Software Development",
      description: "Tailor-made software solutions that solve your business problems efficiently and reliably."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/bar-chart-3.svg",
      title: "Data Analytics",
      description: "Actionable insights from raw data using dashboards, reporting systems, and predictive modeling."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/infinity.svg",
      title: "DevOps Automation",
      description: "CI/CD pipelines, containerization, code integration, and performance monitoring for fast delivery."
    },
    {
      icon: "https://unpkg.com/lucide-static@latest/icons/headphones.svg",
      title: "IT Support & Maintenance",
      description: "24/7 technical support, issue resolution, updates, and system maintenance for smooth operations."
    }
  ]);
}
