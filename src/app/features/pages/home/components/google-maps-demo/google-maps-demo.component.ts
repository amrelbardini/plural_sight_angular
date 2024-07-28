import { Component } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';


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
      label: { color: 'red', text: 'A' },
      title: 'Location 1',
      tripDetails: 'Trip details for Location 1',
      options: { icon: 'assets/red-marker.png' }
    },
    {
      position: { lat: 47.6205, lng: -122.3493 },
      label: { color: 'green', text: 'B' },
      title: 'Location 2',
      tripDetails: 'Trip details for Location 2',
      options: { icon: 'assets/green-marker.png' }
    },
    {
      position: { lat: 37.7749, lng: -122.4194 },
      label: { color: 'blue', text: 'C' },
      title: 'Location 3',
      tripDetails: 'Trip details for Location 3',
      options: { icon: 'assets/blue-marker.png' }
    }
  ];

  selectedMarker: any = null;

  openInfoWindow(marker: any) {
    this.selectedMarker = marker;
  }


}
