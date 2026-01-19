import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { Footer } from "./features/footer/footer";
import { Navbar } from "./features/nav-bar-component/nav-bar-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Footer, Navbar, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
