import { Timestamp } from "@angular/fire/firestore";

export interface booking {
    pickupLocation: MapLocation;
    dropLocation: MapLocation;
    pickupStartDate: Timestamp;
    pickupEndDate: Timestamp;
    returnStartDate?: Timestamp;
    returnEndDate?: Timestamp;
    guideAvailable: boolean;
    type: 'cab' | 'outstation' | 'rental' | 'guide';
    status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'assigned';
    created: Timestamp;
    updated?: Timestamp;
    user: user;
    driver?: driver;
    vehicle?: vehicle;
    package?: any;
    grandTotal?:number;
    costs?:{
      cost:number;
      name:string;
    }[]
    orderDetail?:any;
}

export interface packages {
    id?: string;
    hours: number;
    kms: number;
}

export interface location {
    id?: string;
    name: string;
    address: string;
    landmark: string;
    pinCode: string;
    lat: number;
    lng: number;
}

export interface user {
    displayName: string;
    email: string;
    photoURL: string;
    phone: string;
    userId?: string;
    address?: location;
}

export interface driver {
    verificationType: 'aadharCard' | 'panCard' | 'voterId' | 'passport';
    phoneNumber: number;
    licenseNumber: string;
    expiryDate: Timestamp;
    photoUrl: string;
    dob: Timestamp;
    displayName: string;
    email: string;
    photoURL: string;
    phone: string;
    userId?: string;
    address?: location;
}

export interface vehicle {
    modelType: string;
    vehicleNumber: string;
    color?: string;
    vehicleImage: string;
    noOfSeats: number;
    vehicleDescription?: string;
    vehicleName: string;
    ratePerKm: number;
    id?: string;
    fuelTankCapacity: number;
    airConditioner: boolean;

}

// New
export interface RentalPackage {
  id?:string;
  hours: number;
  distance: number;
  enabled: boolean;
}
export interface GuideRentalPackage {
  id?:string;
  days: number;
  price: number;
  enabled: boolean;
}
export interface MapLocation {
  id?:string;
  lat: number;
  lng: number;
  name: string;
  enabled: boolean;
  spotTime: number;
}
export interface VehicleCategory {
  image:string;
  vehicleCategory:string;
  description:string;
  seats:number;
  capacity:number;
  acNonac:string;
  fullPrice:number;
  pricePerHour:number;
  enabled:boolean;
  id?:string;
}
export interface VehiclePricingPackages {
  id?:string;
  vehicleCategory:string;
  minimumHours:number;
  maximumHour:number;
  pricePerHour:number;
  enabled:boolean;
}

export interface VehicleCommissionPackages {
  id?:string;
  vehicleCategory:string;
  minimumHours:number;
  maximumHour:number;
  type:'percentage'|'fixed';
  value:number;
  enabled:boolean;
}