import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
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
  isServer = !isPlatformBrowser(this.platformId);
  isLoading = signal(true);

  constructor() {
    this.router.events.subscribe((event) => {
      if (isPlatformBrowser(this.platformId)) {
        if (event instanceof NavigationStart) {
          this.isLoading.set(true);
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          setTimeout(() => {
            this.isLoading.set(false);
          }, 500);
        }
      } else {
        // Ensure that on the server, we end up in a non-loading state 
        // for the content logic, but keep the signal true for the loader
        this.isLoading.set(false);
      }
    });
  }
}
