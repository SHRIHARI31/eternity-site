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
  isLoading = signal(true);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            this.isLoading.set(false);
          }, 1000);
        } else {
          this.isLoading.set(false);
        }
      }
    });
  }
}
