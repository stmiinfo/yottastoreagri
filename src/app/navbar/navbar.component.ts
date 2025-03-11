import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-navbar',
  standalone: true, // Mark the component as standalone
  imports: [RouterLink], // Add RouterLink to imports
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}