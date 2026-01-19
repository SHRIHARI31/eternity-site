import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CarouselModule } from 'primeng/carousel';
import { SeoService } from '../../shared/services/seo.service';
import { Contact } from '../contact/contact';



@Component({
  selector: 'app-home',
  imports: [CarouselModule, Contact, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private seo = inject(SeoService);

  constructor() {
    this.seo.updateSeo(
      'Eternity - Custom Software Solutions & Web Development',
      'Eternity provides high-quality custom software solutions, workflow automation, web business solutions, and ERP software to help businesses grow and streamline operations.',
      'software development, workflow automation, web solutions, ERP software, business optimization'
    );
  }

  cardData = signal([
    {
      img: "https://unpkg.com/lucide-static@latest/icons/settings-2.svg",
      alt: "workflowAutomation",
      title: "We provide workflow automation",
      description: "Automate repetitive tasks with intelligent process flows.Reduce manual effort and eliminate errors. Improve overall efficiency across your business operations."
    },
    {
      img: "https://unpkg.com/lucide-static@latest/icons/layout.svg",
      alt: "webSolutions",
      title: "We create web business solution software",
      description: "Build scalable and modern web applications tailored to your business needs. Streamline customer interaction through custom digital tools. Deliver smooth experiences on any device."
    },
    {
      img: "https://unpkg.com/lucide-static@latest/icons/trending-up.svg",
      alt: "revenueGrowth",
      title: "We help increase revenue with business software",
      description: "Optimize business performance using data-driven tools. Automate sales, billing, and customer engagement processes. Unlock new growth opportunities with smart technology."
    },
    {
      img: "https://unpkg.com/lucide-static@latest/icons/package.svg",
      alt: "inventoryERP",
      title: "We provide inventory and ERP software solutions",
      description: "Track stock levels in real-time with complete accuracy. Integrate purchasing, sales, and accounting under one system. Improve control over your entire business workflow."
    }
  ])
  testimonialData = signal([{
    id: 1,
    name: "Alex Rivera",
    role: "Senior Systems Architect",
    avatar: "https://i.pravatar.cc/150?u=alex",
    quote: "The optimization insights provided here changed my entire workflow. The precision is unmatched."
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    quote: "The utility-first approach with Tailwind makes scaling our design system effortless."
  },
  {
    id: 3,
    name: "Praveen J",
    role: "Architect",
    avatar: "https://i.pravatar.cc/150?u=jhon",
    quote: "The focus on performance and clean code is exactly what we needed."
  },
  {
    id: 4,
    name: "Thomas M",
    role: "CEO of wayne entreprise",
    avatar: "https://i.pravatar.cc/150?u=laura",
    quote: "Highly efficient components. The focus on performance and clean code is exactly what we needed."
  },
 { id: 5,
    name: "Jordan Smith",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?u=jordan",
    quote: "Highly efficient components. The focus on performance and clean code is exactly what we needed."}

])
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];


  techImg = signal([
    { img: "https://www.svgrepo.com/show/452156/angular.svg", alt: "angular" },
    { img: "https://www.svgrepo.com/show/452091/python.svg", alt: "python" },
    { img: "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg", alt: "sql" },
    { img: "https://www.svgrepo.com/show/373845/mongo.svg", alt: "mongoDb" },
    { img: "https://www.svgrepo.com/show/330413/fastapi.svg", alt: "fastApi" },
    { img: "https://www.svgrepo.com/show/349419/javascript.svg", alt: "javascript" }])

  linearTech = computed(() => [...this.techImg(), ...this.techImg(), ...this.techImg()])

}
