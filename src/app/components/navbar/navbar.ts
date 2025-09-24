import { Component } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './navbar.html', 
  styleUrl: './navbar.css'
})
export class Navbar {
  item1(): void{
    console.log("Affichage item 1");
  }
}
