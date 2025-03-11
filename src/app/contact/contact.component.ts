import { Component, AfterViewInit, Inject, PLATFORM_ID, NgZone } from '@angular/core';
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
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // Ensure Leaflet is loaded only in the browser (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      // Set a timeout to delay the map initialization
      setTimeout(() => {
        this.getMap(); // Function call after 2 seconds
      }, 2000); // 2000 milliseconds delay
    }
  }

  // Map initialization function
  private getMap() {
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
