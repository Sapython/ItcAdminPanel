export interface RentalPackage {
  id?:string;
  hours: number;
  distance: number;
  enabled: boolean;
}
export interface GuideRentalPackage {
  id?:string;
  hours: number;
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

export interface Spot {
  id?:string;
  name: string;
  rating: number;
  category: string;
  connectedTours: string[];
  connectedGuides: string[];
  latitude: number;
  longitude: number;
  address: string;
  description: string;
  images: string[];
  enabled: boolean;
}

export interface TaxSettings {
  id?:string;
  tax: number;
}