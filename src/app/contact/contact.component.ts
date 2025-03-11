import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <h1>Contact Us</h1>
    <p>Visit us at our location:</p>
    <div id="map" style="height: 400px; width: 100%;"></div>
  `,
})
export class ContactComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Ensure Leaflet is loaded only in the browser (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Leaflet library only for the client-side
      import('leaflet').then((L) => {
        // Check if the L object is properly loaded
        if (L && L.map) {
          // Initialize the map with the updated coordinates
          const map = L.map('map').setView([36.886750, 10.105075], 12);

          // Add OpenStreetMap tiles to the map
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
          }).addTo(map);

          // Add a marker at the new coordinates
          L.marker([36.886750, 10.105075]).addTo(map);
        } else {
          console.error('Leaflet did not load properly.');
        }
      }).catch((err) => {
        console.error('Error loading Leaflet library:', err);
      });
    }
  }
}
