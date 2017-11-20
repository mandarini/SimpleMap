/**
  Thanks kavaliev (https://github.com/kamaliev/google-maps-angular2) for your script and inspiration
*/
import { Injectable } from '@angular/core';

const your_API_key = 'AIzaSyAwVnwE1bEZf_Bkk_pSkGM0XlBSXJocVUY';
/**
  Here is the google maps url link. You can also add libraries (places, drawing, etc) as URL params after the key
*/
const url = 'https://maps.googleapis.com/maps/api/js?key=' + your_API_key + '&callback=initMap';

@Injectable()
export class GmapService {

      /**
         This promise will resolve when the callback from the "initMap" function is called.
         See below.
       */
      private loadAPI: Promise<any>;

      constructor() {}

      /**
         Load the Google Maps API script
         Just add the script to the head tag, as we would do normally.
       */
      private loadScript(): void {
          if (!document.getElementById('gmap')) {
              const script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = url;
              script.id = 'gmap';
              document.head.appendChild(script);
          }
      }

      /**
         Waits for the google.maps object to be added to the window,
         then returns it as a promise to init().

         Here, we create a Promise. In the promise, we pass a resolve function.

         When the function "init()" is called:

         First, we check if this.loadAPI is defined (that is, if the promise has already been resolved).

         If it's undefined, then we define it:
         We add an "initMap" function to our window, so that it can be globally accessible,
         once the Google Maps API script is called.
         The reason for that, is because the Google Maps API script, once loaded,
         will look for a global "initMap" function.
         So, we need to have it defined, so that the script can find it and call it.
         Once we define it, we load the Google Maps API script on the head tag.
         
         When initMap() is called, we know that the google.maps object exists!
         Thus, we add it to the window and the resolve the promise!

       */
      get init(): Promise<any> {
          if (!this.loadAPI) {
              this.loadAPI = new Promise((resolve) => {
                window['initMap'] = (ev: any) => {
                    resolve(window['google'].maps);
                  };
                this.loadScript();
              });
          }
          return this.loadAPI;
      }
}
