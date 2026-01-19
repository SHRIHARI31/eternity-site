import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-career',
  imports: [RouterLink],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateSeo(
      'Careers - Join Our Team at Eternity',
      'Explore career opportunities at Eternity. We are looking for Full Stack Developers, UI/UX Designers, DevOps Engineers, and Product Managers to join our innovative team.',
      'eternity careers, software jobs, developer jobs tamil nadu, hiring designers, devops opportunities'
    );
  }
features = signal( [
  {
    title: 'Compassion',
    description: 'We prioritize care, empathy, and user-centered design in every solution we develop.',
    icon: 'pi pi-heart'
  },
  {
    title: 'Innovation',
    description: 'We push the boundaries of technology to create modern and forward-thinking solutions.',
    icon: 'pi pi-lightbulb'
  },
  {
    title: 'Accessibility',
    description: 'Our systems are designed to be inclusive and accessible for all types of users.',
    icon: 'pi pi-folder-open'
  },
  {
    title: 'Connectivity',
    description: 'We ensure seamless communication and real-time data flow through smart connectivity.',
    icon: 'pi pi-wifi'
  }
]);

jobVacancy = signal([
  {
    id: 1,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Tamil Nadu, India',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹8-12 LPA',
    description: 'We are looking for a talented Full Stack Developer to join our engineering team. You will work on cutting-edge web applications using Angular, Node.js, and modern cloud technologies.',
    skills: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs'],
    icon: 'pi pi-code'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹6-10 LPA',
    description: 'Join our design team to create beautiful, user-centered interfaces. You will work closely with developers to bring innovative design concepts to life.',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Responsive Design'],
    icon: 'pi pi-palette'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Tamil Nadu, India',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹10-15 LPA',
    description: 'We need an experienced DevOps Engineer to manage our cloud infrastructure, automate deployments, and ensure system reliability and scalability.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    icon: 'pi pi-server'
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '₹12-18 LPA',
    description: 'Lead product strategy and development for our SaaS platforms. Work with cross-functional teams to deliver innovative solutions that solve real business problems.',
    skills: ['Product Strategy', 'Agile', 'User Stories', 'Analytics', 'Stakeholder Management'],
    icon: 'pi pi-briefcase'
  }
]);

}
