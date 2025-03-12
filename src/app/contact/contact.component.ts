import { AfterViewInit, Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('map')
  mapElementRef!: ElementRef;

  private _map: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit(): Promise<void> {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Leaflet only in the browser
      const L = await import('leaflet');

      // Initialize the map
      this._map = L.map(this.mapElementRef.nativeElement)
        .setView([46.801111, 8.226667], 8);

      // Add the tile layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
      }).addTo(this._map);
    }
  }
}