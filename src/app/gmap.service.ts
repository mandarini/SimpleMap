/**
  Thanks kavaliev (https://github.com/kamaliev/google-maps-angular2) for your script and inspiration
*/
import { Injectable } from '@angular/core';

const your_API_key = 'AIzaSyAwVnwE1bEZf_Bkk_pSkGM0XlBSXJocVUY';
/**
  Here is the google maps url link. You can also add libraries (places, drawing, etc) as URL params after the key
*/
const url = 'https://maps.googleapis.com/maps/api/js?key=' + your_API_key + '&callback=onApiLoad';

@Injectable()
export class GmapService {

      /**
         This promise will resolve when the callback from the "onApiLoad" function is called.
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
         We want the promise to resolve when onApiLoad callback is called.
         This way we make sure that when we call init, we wait for onApiLoad to be called.
         onApiLoad is called after the google.maps object has been added to the window.

         So, the way we work is the following.
         First, we check if this.loadAPI is defined (that is, if the promise has already been resolved)/
         If it's undefined, then we load the Google Maps API script on the head tag,
         then we wait for onApiLoad callback.
         When onApiLoad runs, we resolve our promise, containing the google.maps object
         that the Google Maps API script added to our window.

         The reason why we are not just writing "window.google.maps" is because
         the property "google" is not inherent, and our compiler throws an error.
         It still compiles, of course, because we don't ask for the google object
         until it is safely added to window. However, we don't like to see errors
         on the compiler, thus window['google'].maps, which is passed ok.

         @returns {Promise<any>}
       */
      get init(): Promise<any> {
          if (!this.loadAPI) {
              this.loadAPI = new Promise((resolve) => {
                  this.loadScript();
                  window['onApiLoad'] = (ev: any) => {
                      resolve(window['google'].maps);
                  };
              });
          }
          return this.loadAPI;
      }
}
