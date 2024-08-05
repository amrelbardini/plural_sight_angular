import { Component } from '@angular/core';




@Component({
  selector: 'app-google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
  styleUrls: ['./google-maps-demo.component.scss']
})
export class GoogleMapsDemoComponent {

  zoom = 5;
  center: google.maps.LatLngLiteral = { lat: 46.879966, lng: -121.726909 };
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap'
  };

  // Define the markers with different colored icons and data
  markers = [
    {
      position: { lat: 46.879966, lng: -121.726909 },
      label: { color: 'white', text: '1' },
      title: 'Location 1',
      tripDetails: 'Trip details for Location 1',
      options: { icon: this.createMarkerIcon('green', 32, 1) }
    },
    {
      position: { lat: 47.6205, lng: -122.3493 },
      label: { color: 'white', text: '2' },
      title: 'Location 2',
      tripDetails: 'Trip details for Location 2',
      options: { icon: this.createMarkerIcon('red', 32, 2)  }
    },
    {
      position: { lat: 37.7749, lng: -122.4194 },
      label: { color: 'white', text: '3', },
      title: 'Location 3',
      tripDetails: 'Trip details for Location 3',
      options: { icon: this.createMarkerIcon('black',32, 3) }

    }
  ];

  selectedMarker: any = null;

  openInfoWindow(marker: any) {
    this.selectedMarker = marker;
    console.log("map clicked")
    console.log(marker)
  }

  createMarkerIcon(color: string, size: number, order: number,): string {
    return `

    data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`


    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  width="${size}" height="${size}">
      <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path fill="${color}"  d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/>
    </svg>




    `)}
    `;
  }

  //       <text x="16" y="16" font-size="${labelFontSize}px" fill="white" text-anchor="middle" alignment-baseline="middle">${order}</text>

  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>

  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"/></svg>
}
