import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { LatLngLiteral } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 43.187194;
  lng = 24.005656;
  zoom = 13;

  trainLat = 43.187194;
  trainLng = 24.005656;

  stations: Array<LatLngLiteral> = [
    { lat: 43.187194, lng: 24.005656 }, // Кунино
    { lat: 43.189054, lng: 24.0659628 }, // РП Карлуково
    { lat: 43.184339, lng: 24.070593 }, // Карлуково (стара)
    { lat: 43.232869, lng: 24.057512 }, // Реселец
    { lat: 43.24643, lng: 24.05351 } // спирка Реселец
  ];

  newPath: Array<LatLngLiteral> = [
    { lat: 43.187194, lng: 24.005656 }, // Кунино
    { lat: 43.189054, lng: 24.0659628 }, // РП Карлуково
    { lat: 43.24643, lng: 24.05351 } // спирка Реселец
  ];

  oldPath: Array<LatLngLiteral> = [
    { lat: 43.187194, lng: 24.005656 }, // Кунино
    { lat: 43.184339, lng: 24.070593 }, // Карлуково (стара)
    { lat: 43.232869, lng: 24.057512 }, // Реселец
    { lat: 43.24643, lng: 24.05351 } // спирка Реселец
  ];

  constructor() { }

  ngOnInit() {
    IntervalObservable
      .create(1000)
      .subscribe((n) => {
        let x0: number;
        let y0: number;
        let x1: number;
        let y1: number;
        // let d: number;
        let t: number;

        n %= 20;

        if (n < 10) {
          x0 = this.newPath[0].lng;
          y0 = this.newPath[0].lat;
          x1 = this.newPath[1].lng;
          y1 = this.newPath[1].lat;
          // d = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
          t = 0.1;
        } else {
          x0 = this.newPath[1].lng;
          y0 = this.newPath[1].lat;
          x1 = this.newPath[2].lng;
          y1 = this.newPath[2].lat;
          // d = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
          t = 0.1;
        }

        n = (n % 10) + 1;

        this.trainLng = (1 - n * t) * x0 + n * t * x1;
        this.trainLat = (1 - n * t) * y0 + n * t * y1;
      });
  }
}

// 112.9  75 КУНИНО         9  9 00:48   - 00:48  146
// 118.8  80 РП КАРЛУКОВО   5  5 00:53   - 00:53  147
// 125.5  75 реселец           5  5 00:58   - 00:58 1067
