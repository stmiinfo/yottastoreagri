import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

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
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // Dynamically import Leaflet
        import('leaflet').then(L => {
          // Updated coordinates (36.886750, 10.105075)
          const map = L.map('map').setView([36.886750, 10.105075], 12);

          // Add the OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
          }).addTo(map);

          // Add a marker at the new coordinates
          L.marker([36.886750, 10.105075]).addTo(map);
        });
      }, 0);
    }
  }
}
