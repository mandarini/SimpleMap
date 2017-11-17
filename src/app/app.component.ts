import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GmapService } from './gmap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mapElement') mapElement: ElementRef;

  private map: any;

  constructor(private gapi: GmapService) {
  }

  ngAfterViewInit(): void {

    /**
     * Init map api [google.maps]
     */
    this.gapi.init.then((maps: any) => {
      const loc = new maps.LatLng(38, 23);

      this.map = new maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        center: loc,
        scrollwheel: true,
        panControl: false,
        mapTypeControl: false,
        zoomControl: true,
        streetViewControl: false,
        scaleControl: true,
        zoomControlOptions: {
          style: maps.ZoomControlStyle.LARGE,
          position: maps.ControlPosition.RIGHT_BOTTOM
        }
      });
    });
  }

}
