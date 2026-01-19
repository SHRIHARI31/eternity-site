import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { label: 'Years of Excellence', value: '10+' },
    { label: 'Global Clients', value: '200+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Team Members', value: '50+' }
  ];

  values = [
    {
      title: 'Innovation',
      desc: 'Pushing boundaries with cutting-edge technology solutions.',
      icon: 'pi pi-bolt',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Integrity',
      desc: 'Building trust through transparency and honest relationships.',
      icon: 'pi pi-shield',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Excellence',
      desc: 'Delivering superior quality in every line of code we write.',
      icon: 'pi pi-star',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];
}
