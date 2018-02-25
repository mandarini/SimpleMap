import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LoadScriptService } from './load-script.service';

const your_API_key = 'AIzaSyAwVnwE1bEZf_Bkk_pSkGM0XlBSXJocVUY';
const url = 'https://maps.googleapis.com/maps/api/js?key=' + your_API_key;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mapElement') mapElement: ElementRef;

  private map: any;

  constructor(private load: LoadScriptService) {
  }

  ngAfterViewInit(): void {

    this.load.loadScript(url, 'gmap',() => {
      const maps = window['google']['maps'];
      const loc = new maps.LatLng(37.971575, 23.726235);
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
