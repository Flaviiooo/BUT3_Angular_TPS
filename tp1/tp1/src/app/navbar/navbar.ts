import { Component } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './navbar.html', 
  styleUrl: './navbar.css'
})
export class Navbar {
  item1(): void{
    console.log("Affichage item 1");
  }
}
