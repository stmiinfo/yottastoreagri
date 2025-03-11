import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Only import RouterOutlet
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // Remove RouterLink
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'yotta-store';
}