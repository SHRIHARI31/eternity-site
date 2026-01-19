import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [

    {
        path:"",
        pathMatch:"full",
        component:Home
    },{
        path:"service",
        loadComponent: () => import('./features/service/service').then(m => m.Service)
    },
    {
        path:"career",
        loadComponent: () => import('./features/career/career').then(m => m.Career)
    },
    {
        path:"about",
        loadComponent: () => import('./features/about/about').then(m => m.About)
    },
    {
        path:"contact",
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
    }

];
