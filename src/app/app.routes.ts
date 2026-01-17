import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Service } from './features/service/service';
import { Career } from './features/career/career';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

export const routes: Routes = [

    {
        path:"",
        pathMatch:"full",
        component:Home,  
    },{
        path:"service",
        component:Service
    },
    {
        path:"career",
        component:Career
    },
    {
        path:"about",
        component:About
    },
    {
        path:"contact",
        component:Contact
    }

];
