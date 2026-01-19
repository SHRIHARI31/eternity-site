import { isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, PLATFORM_ID } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from "./features/footer/footer";
import { Navbar } from "./features/nav-bar-component/nav-bar-component";
import { Loader } from "./shared/loader/loader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Footer, Navbar, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  
  // Track if we are on the server for SEO/Loader overlay logic
  isServer = !isPlatformBrowser(this.platformId);

  // Declaratively convert router events to a signal
  private routerEvent = toSignal(this.router.events);

  // Derived signal for loader state: only true during NavigationStart in the browser
  isLoading = computed(() => {
    if (this.isServer) return false; 
    return this.routerEvent() instanceof NavigationStart;
  });
}
