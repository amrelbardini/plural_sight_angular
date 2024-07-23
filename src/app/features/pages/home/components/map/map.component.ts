import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer, marker, Marker, icon, Map } from 'leaflet';

import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  map: Map | undefined;
  routingControl: L.Routing.Control | undefined;

  center = latLng(31.105753, 29.924521);

  imgUrl =
    'https://dw9to29mmj727.cloudfront.net/promo/2016/6231-SeriesHeaders_HxH_2000x800.jpg';

  //map options
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: this.center,
  };

  //pins on the map to show the exact location
  markers: Marker<any>[] = [
    marker([31.05753, 29.924524], {
      icon: icon({
        iconSize: [15, 30],
        iconAnchor: [13, 41],
        iconUrl: 'assets/location-dot-solid.svg',
      }),
    }).bindPopup('<b>Location 1</b><br>Data about Location 1'),

    marker([31.205753, 29.924526], {
      icon: icon({
        iconSize: [15, 30],
        iconAnchor: [13, 41],
        iconUrl: 'assets/location-dot-solid.svg',
      }),
    }).bindPopup(


      `<div class="popup-container">
         <h6>Custom Heading</h6>
         <img src="${this.imgUrl}"/>
         <p class="location-description">
          what is up custom text right here! YOOOO
         </p>
       </div>
       `
    ),

    marker([31.0253, 29.92452], {
      icon: icon({
        iconSize: [15, 30],
        iconAnchor: [13, 41],
        iconUrl: 'assets/map-pin-solid.svg',
      }),
    }).bindPopup('<b>Location 3</b><br>Data about Location 3'),
  ];

  //locations list
  locations = [
    {
      name: 'Location 1',
      lat: 46.879966,
      lng: -121.726909,
      details: 'Details for Location 1',
      iconColor:"green"
    },
    {
      name: 'Location 2',
      lat: 47.6205,
      lng: -122.3493,
      details: 'Details for Location 2',
    },
    {
      name: 'Location 3',
      lat: 37.7749,
      lng: -122.4194,
      details: 'Details for Location 3',
    },
    {
      name: 'Location 4',
      lat: 37.7749,
      lng: -122.0194,
      details: 'Details for Location 4',
    },
  ];

  onMapReady(map: Map): void {
    this.map = map;
  }

  showLocation(location: any): void {
    console.log(location);

    if (this.map) {
      this.map.setView([location.lat, location.lng], 10);
      const marker = L.marker([location.lat, location.lng]).addTo(this.map);
      marker.bindPopup(location.details).openPopup();
      this.resize();
    }
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {this.resize()}

  resize(): void {
    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
      }
    }, 0);
  }

  //show route from location 1 to 2 takes the starting location and the end location
  showRoute(start: any, end: any) {
    if (this.map) {
      this.resize();
      L.Routing.control({
        waypoints: [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)],
        routeWhileDragging: true,
        showAlternatives: true,


      }).addTo(this.map);
    }
  }
}
