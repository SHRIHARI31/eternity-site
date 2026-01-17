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
