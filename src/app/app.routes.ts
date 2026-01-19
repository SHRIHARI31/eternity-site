import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [

    {
        path:"",
        pathMatch:"full",
        component:Home,
        title: "Eternity - Custom Software Solutions & Web Development"
    },{
        path:"service",
        loadComponent: () => import('./features/service/service').then(m => m.Service),
        title: "Our Services - Eternity Software Solutions"
    },
    {
        path:"career",
        loadComponent: () => import('./features/career/career').then(m => m.Career),
        title: "Careers - Join Our Team at Eternity"
    },
    {
        path:"about",
        loadComponent: () => import('./features/about/about').then(m => m.About),
        title: "About Us - The Story Behind Eternity"
    },
    {
        path:"contact",
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact),
        title: "Contact Us - Get in Touch with Eternity"
    }

];
