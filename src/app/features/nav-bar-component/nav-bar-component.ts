import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.css',
})
export class Navbar {
  toggler: boolean = false;

  setToggle() {
    this.toggler = !this.toggler;
  }
}
