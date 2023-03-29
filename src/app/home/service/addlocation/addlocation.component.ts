import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { MapLocation } from 'src/structures/service.structure';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss']
})
export class AddlocationComponent {
  constructor(private dialogRef:DialogRef,@Inject(DIALOG_DATA) private dialogData:{mode:'add'|'edit',value:MapLocation}) {}
  currentPosition:google.maps.LatLngLiteral | undefined;
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  markerOptions: google.maps.MarkerOptions = {draggable: true};
  zoom = 20;
  locationForm:FormGroup = new FormGroup({
    name:new FormControl('',Validators.required),
    hours:new FormControl(0,Validators.required),
  })
  ngOnInit(): void {
    // get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }

    if (this.dialogData.mode=='edit'){
      this.currentPosition = {
        lat:this.dialogData.value.lat,
        lng:this.dialogData.value.lng
      }
      this.center = {
        lat:this.dialogData.value.lat,
        lng:this.dialogData.value.lng
      }
      this.locationForm.patchValue({
        name:this.dialogData.value.name,
        hours:this.dialogData.value.spotTime
      })
    }
  }
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) {
        this.center = (event.latLng.toJSON())
        this.currentPosition = (event.latLng.toJSON())
      };
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  newPosition(event:any){
    console.log(event);
    this.currentPosition = event.latLng.toJSON();
  }

  cancel(){
    this.dialogRef.close()
  }

  submit(){
    let data:MapLocation = {
      lat:this.currentPosition!.lat,
      lng:this.currentPosition!.lng,
      name:this.locationForm.value.name,
      spotTime:this.locationForm.value.hours,
      enabled:true
    }
    this.dialogRef.close(data)
  }
}
