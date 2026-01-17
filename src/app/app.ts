import { Component, } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from "./features/footer/footer";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  toggler:boolean = false

  setToggle(){
    this.toggler = !this.toggler
  }


}
