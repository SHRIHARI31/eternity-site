import { Component, signal, computed } from '@angular/core';
import { CarouselModule } from 'primeng/carousel'
import { Contact } from '../contact/contact';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [CarouselModule, Contact, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  cardData = signal([
    {
      img: "hpr.jpg",
      alt: "helpingRobo",
      title: "We provide workflow automation",
      description: "Automate repetitive tasks with intelligent process flows.Reduce manual effort and eliminate errors. Improve overall efficiency across your business operations."
    },
    {
      img: "rbwk.jpg",
      alt: "roboCreatingSoftware",
      title: "We create web business solution software",
      description: "Build scalable and modern web applications tailored to your business needs. Streamline customer interaction through custom digital tools. Deliver smooth experiences on any device."
    },
    {
      img: "rgm.jpg",
      alt: "revenueGrowthMachine",
      title: "We help increase revenue with business software",
      description: "Optimize business performance using data-driven tools. Automate sales, billing, and customer engagement processes. Unlock new growth opportunities with smart technology."
    },
    {
      img: "invma.jpg",
      alt: "inventoryManagement",
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
    name: "Jordan Smith",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?u=jordan",
    quote: "Highly efficient components. The focus on performance and clean code is exactly what we needed."
  },
  {
    id: 4,
    name: "Jordan Smith",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?u=jordan",
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
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
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
