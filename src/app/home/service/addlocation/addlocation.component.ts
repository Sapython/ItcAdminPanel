import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { UserData } from 'src/structures/user.structure';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss']
})
export class AddlocationComponent {
  // areas: any[] = []
  // public addressForm: FormGroup = new FormGroup({
  //   address: new FormControl(''),
  //   nearBy: new FormControl(''),
  //   pincode: new FormControl(''),
  //   area: new FormControl(''),
  // });
  // coordinates:Position;
  // constructor(private user: UserService, public dataProvider: DataProviderService, private databaseService: DatabaseService, private router: Router,private alertify:AlertsAndNotificationsService) { }
  // currentPosition:google.maps.LatLngLiteral;
  // center: google.maps.LatLngLiteral;
  // zoom = 18;
  // mapOptions: google.maps.MapOptions = {
  //   zoom: 18,
  //   mapTypeId: 'roadmap',
  //   disableDefaultUI: true,
  // }
  // markerOptions: google.maps.MarkerOptions = {draggable: false};
  // centerMarkerOptions: google.maps.MarkerOptions = {draggable: false, icon: './assets/circle.png',};
  // moveMap(event: google.maps.MapMouseEvent) {
  //   // console.log(event);
  //   if (event.latLng != null) {
  //     this.currentPosition = event.latLng.toJSON();
  //   }
  // }
  // async ngOnInit() {
  //   this.coordinates = await Geolocation.getCurrentPosition();
  //   this.currentPosition = {
  //     lat: this.coordinates.coords.latitude,
  //     lng: this.coordinates.coords.longitude,
  //   }
  //   this.center = this.currentPosition;
  //   console.log(this.dataProvider.user)
  //   const data = {
  //     ...this.dataProvider.user?.currentAddress,
  //     area: this.dataProvider.user?.currentAddress?.area?.id || ''
  //   }
  //   this.dataProvider.user?.currentAddress
  //   console.log("data", data);
  //   this.addressForm.patchValue(data)
  //   this.databaseService.getAreas().then((res: any) => {
  //     res.forEach((element: any) => {
  //       this.areas.push({
  //         ...element.data(),
  //         id: element.id,
  //       });
  //       console.log(this.areas);
  //     });
  //   })
  // }

  // pickupAddress() {
  //   if(!this.coordinates.coords){
  //     this.alertify.presentToast("Location Not Found. Please Enable GPS.",'error');
  //   }
  //   this.dataProvider.loading = true;
  //   const data:UserData = {
  //     currentAddress: {
  //       ...this.addressForm.value,
  //       latitude: this.currentPosition.lat,
  //       longitude: this.currentPosition.lng,
  //       area: this.areas.find((area: any) => area.id == this.addressForm.value.area)
  //     }
  //   } as UserData
  //   console.log(data, this.addressForm.value)
  //   this.user.updateUser(this.dataProvider.user?.id, data).then((res:any) => {
  //     this.router.navigateByUrl('root/home')
  //   }).finally(()=>{
  //     this.dataProvider.loading = false;
  //   })
  // }

  // information(){
  //   this.alertify.presentToast("Red marker is your new location. Blue circle is your currrent location. Click anywhere to set new location",'info',10000)
  // }

  constructor() {}
  ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
