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

  center = latLng(47.6205, -122.3493);

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
      iconColor: 'blue',
      order:'1',
    },
    {
      name: 'Location 2',
      lat: 47.6205,
      lng: -122.3493,
      details: 'Details for Location 2',
      iconColor: 'green',
      order:'2',
    },
    {
      name: 'Location 3',
      lat: 37.7749,
      lng: -122.4194,
      details: 'Details for Location 3',
      iconColor: 'red',
      order:'3',
    },
    {
      name: 'Location 4',
      lat: 37.6749,
      lng: -121.4194,
      details: 'Details for Location 4',
      iconColor: 'orange',
      order:'4',
    },
    {
      name: 'Location 5',
      lat: 37.6749,
      lng: -120.4194,
      details: 'Details for Location 5',
      iconColor: 'crimson',
      order:'5',
    }
  ];


  onMapReady(map: Map): void {
    this.map = map;

    this.addMarkers();
  }

  showLocation(location: any): void {
    console.log(location);

    if (this.map) {

      this.map.setView([location.lat, location.lng], 10);
      // we could get them from the BE or the server
      // const customIcon = icon({
      //   iconUrl: `https://maps.google.com/mapfiles/ms/icons/${location.iconColor}-dot.png`,
      //   iconSize: [32, 32],
      //   iconAnchor: [16, 32],
      //   popupAnchor: [0, -32]
      // });

        // we could add them as html icons from fontawesome and control them with CSS
      const numberIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="numbered-marker">
                <i class="fa-solid fa-location-pin ${location.iconColor}"></i>
                <p class="icon-order">${location.order}</p>
               </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });


      const marker = L.marker([location.lat, location.lng],{ icon: numberIcon }).addTo(this.map);

      marker.bindPopup(location.details).openPopup();

      this.resize();

    }
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.resize();
  }

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
        showAlternatives: true, //shows alternative routes
        collapsible:true, // controls the dialog
        show:true, // shows the suggested route dialog and hides it
      }).addTo(this.map);
    }
  }



  addMarkers() {
    if (this.map) {
      this.locations.forEach(location => {
        // const customIcon = icon({
        //   iconUrl: `https://maps.google.com/mapfiles/ms/icons/${location.iconColor}-dot.png`,
        //   iconSize: [32, 32],
        //   iconAnchor: [16, 32],
        //   popupAnchor: [0, -32]
        //<i class="fa-solid fa-location-pin"></i>
        // });

        const coloredIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="numbered-marker">
                  <i class="fa-solid fa-location-pin ${location.iconColor}"></i>
                  <p class="icon-order">${location.order}</p>
                 </div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });



        const locMarker = marker([location.lat, location.lng], { icon: coloredIcon }).addTo(this.map!);
        locMarker.bindPopup(location.details);
      });
    }
  }




}
