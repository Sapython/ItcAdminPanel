import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  getDoc,
  setDoc,
  where,
  DocumentSnapshot,
  endAt,
  increment,
  limit,
  limitToLast,
  orderBy,
  startAfter,
  collectionData,
} from '@angular/fire/firestore';


import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { UserData } from 'src/structures/user.structure';
import { urls } from '../url';
import { RentalPackage, GuideRentalPackage, MapLocation, VehicleCategory, VehiclePricingPackages, VehicleCommissionPackages, Spot, TaxSettings } from 'src/structures/service.structure';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  storage = getStorage();
  constructor(private fs: Firestore) { }

  async upload(
    path: string,
    file: File | ArrayBuffer | Blob | Uint8Array
  ): Promise<any> {
    // const ext = file!.name.split('.').pop();
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    } else {
      // handle invalid file
      return false;
    }
  }

  getCounters() {
    return getDoc(doc(this.fs, 'sitedata/counters/'));
  }

  getSeats() {
    return getDoc(doc(this.fs, 'sitedata/seats/'));
  }

  async addUser(user: UserData) {
    // await updateDoc(doc(this.fs, 'sitedata/counters'), {
    //   totalUsers: increment(1),
    // });
    // await this.updateUserAnalytics('added');
    return addDoc(collection(this.fs, 'users'), user);
  }

  getAllUsers() {
    return getDocs(query(collection(this.fs, 'users'), orderBy('name')));
  }

  getActiveUsers() {
    return getDocs(
      query(
        collection(this.fs, 'users'),
        where('activeNow', '==', true),
        orderBy('name')
      )
    );
  }

  getFirstUsers(length: number, access: string) {
    return getDocs(
      query(
        collection(this.fs, 'users'),
        orderBy('emailVerified'),
        where('access', '==', access),
        limit(length)
      )
    );
  }

  getNextUsers(length: number, lastDocument: DocumentSnapshot) {
    return getDocs(
      query(
        collection(this.fs, 'users'),
        orderBy('name'),
        where('access', '==', 'user'),
        limit(length),
        startAfter(lastDocument)
      )
    );
  }

  getPreviousUsers(length: number, firstDocument: DocumentSnapshot) {
    return getDocs(
      query(
        collection(this.fs, 'users'),
        orderBy('name'),
        where('access', '==', 'user'),
        limitToLast(length),
        endAt(firstDocument)
      )
    );
  }

  editUser(userId: string, user: UserData) {
    return updateDoc(doc(this.fs, 'users/' + userId), user);
  }

  async deleteUser(userId: string) {
    await updateDoc(doc(this.fs, 'sitedata/counters'), {
      totalUsers: increment(-1),
    });
    this.updateUserAnalytics('deleted');
    return deleteDoc(doc(this.fs, 'users/' + userId));
  }

  ///getUsers
  getUser(id: string) {
    return getDoc(doc(this.fs, 'users/' + id));
  }

  updateUserAnalytics(user: 'added' | 'deleted') {
    const today = new Date();
    const docId = today.getMonth().toString() + today.getFullYear().toString();
    return setDoc(
      doc(this.fs, 'analytics/' + docId),
      {
        users: user == 'added' ? increment(1) : increment(-1),
      },
      { merge: true }
    );
  }

  updateEarningAnalytics(amount: number) {
    const today = new Date();
    const docId = today.getMonth().toString() + today.getFullYear().toString();
    return setDoc(
      doc(this.fs, 'analytics/' + docId),
      {
        earnings: increment(amount),
      },
      { merge: true }
    );
  }

  getAnalytics(month: number, year: number) {
    return getDoc(
      doc(this.fs, 'analytics/' + month.toString() + year.toString())
    );
  }

  getAllNotification() {
    return getDocs(
      query(collection(this.fs, 'admin-notifications'), orderBy('timestamp'))
    );
  }

  updateSettings(settings: any) {
    return setDoc(doc(this.fs, 'sitedata/settings'), settings, { merge: true });
  }

  getSettings() {
    return getDoc(doc(this.fs, 'sitedata/settings'));
  }

  addCloth(cloth: any) {
    return addDoc(collection(this.fs, 'clothes'), cloth);
  }

  getClothes() {
    return getDocs(query(collection(this.fs, 'clothes')));
  }

  addService(service: any) {
    return addDoc(collection(this.fs, 'services'), service);
  }

  deleteService(serviceId: string) {
    return deleteDoc(doc(this.fs, 'services/' + serviceId));
  }

  getServices() {
    return getDocs(query(collection(this.fs, 'services')));
  }

  updateService(id: any, service: any) {
    return updateDoc(doc(this.fs, 'services/' + id), service);
  }

  addArea(area: any) {
    return addDoc(collection(this.fs, 'location-management'), area);
  }

  updateArea(id: any, area: any) {
    return updateDoc(doc(this.fs, 'location-management/' + id), area);
  }

  addVehiclePackage(vehiclePackage: any) {
    return addDoc(collection(this.fs, 'vehicle-management'), vehiclePackage);
  }

  updateVehiclePackage(id: any, banner: any) {
    return updateDoc(doc(this.fs, 'vehicle-management/' + id), banner);
  }

  getVehicles() {
    return getDocs(query(collection(this.fs, 'vehicle-management')));
  }


  addBanner(banner: any) {
    return addDoc(collection(this.fs, 'banner-management'), banner);
  }

  updateBanner(id: any, banner: any) {
    return updateDoc(doc(this.fs, 'banner-management/' + id), banner);
  }

  getPickupBookings() {
    return getDocs(
      query(
        collection(this.fs, 'bookings'),
        where('stage.stage', 'in', [
          'pending',
          'pickupAssigned',
          'pickupCompleted',
          'pickupRecieved',
          'cancelled',
        ])
      )
    );
  }

  getAgents() {
    return getDocs(
      query(collection(this.fs, 'users'), where('access.access', '==', 'agent'))
    );
  }

  async addNotification(
    userId: string,
    title: string,
    message: string,
    type: string,
    link: string,
    additionData?: any
  ) {
    return addDoc(collection(this.fs, 'users/' + userId + '/notification'), {
      title: title,
      body: message,
      url: link,
      viewed: false,
      timestamp: new Date(),
      additionData: additionData || {},
    });
  }

  assignPickupAgent(userId: string, bookingId: string) {
    return updateDoc(doc(this.fs, 'bookings/' + bookingId), {
      pickupAgentId: userId,
    });
  }

  cancelBooking(userId: string, bookingId: string) {
    // notify user
    this.addNotification(
      userId,
      'Booking Cancelled',
      'Your booking has been cancelled by admin',
      'booking',
      '/bookings',
      { bookingId: bookingId }
    );
    return updateDoc(doc(this.fs, 'bookings/' + bookingId), {
      stage: 'cancelled',
    });
  }

  async createLedger(ledger: string, data: any) {
    // console.log(data);
    let collectionRef = collection(this.fs, 'ledgers/ledger/' + ledger);
    let collectionSnap = await getDocs(collectionRef);
    if (collectionSnap.docs.length > 0) {
      return collectionSnap.docs[0].data();
    } else {
      return addDoc(collectionRef, data);
    }
  }
  async getLedgers() {

    let collectionRef = collection(this.fs, 'ledgers/ledger/');
    let collectionSnap = await getDocs(collectionRef);
    let ledgers: string[] = [];
    collectionSnap.docs.forEach((doc) => {
      ledgers.push(doc.id);
    });
    return ledgers;

  }
  async getLedger(ledger: string) {
    let collectionRef = collection(this.fs, 'ledgers/ledger/' + ledger);
    let collectionSnap = await getDocs(collectionRef);
    if (collectionSnap.docs.length > 0) {
      return collectionSnap.docs[0].data();
    } else {
      return null;
    }
  }
  async updateLedger(ledger: string, data: any) {
    let collectionRef = collection(this.fs, 'ledgers/ledger/' + ledger);
    let collectionSnap = await getDocs(collectionRef);
    if (collectionSnap.docs.length > 0) {
      return updateDoc(collectionSnap.docs[0].ref, data);
    } else {
      return null;
    }
  }

  // Rohan

  bookings() {
    return getDocs(collection(this.fs, urls.bookings))
  }

  getRideRentalBookings() {
    return getDocs(query(collection(this.fs, urls.bookings),where('type', '==', 'rental'),where('type', '==', 'cab')));
  }

  getGuideBookings() {
    return getDocs(query(collection(this.fs, urls.bookings),where('type', '==', 'guide')));
  }

  updateBooking(BOOKING_ID: any, data: any) {
    const bookingUrl = urls.booking.replace('{BOOKING_ID}', BOOKING_ID);
    return setDoc(doc(this.fs, bookingUrl), data);
  }

  updatePolicy(data: any) {

    return setDoc(doc(this.fs, urls.policy), data);
  }

  policy() {
    return getDoc(doc(this.fs, urls.policy));
  }

  getAreas() {
    return getDocs(query(collection(this.fs, urls.area)));
  }

  deleteArea(areaId: string) {
    return deleteDoc(doc(this.fs, urls.area + "/" + areaId));
  }

  addReasons(reason: any) {
    return addDoc(collection(this.fs, urls.reasons), reason);
  }

  getReasons() {
    return getDocs(query(collection(this.fs, urls.reasons)));
  }

  deleteReasons(REASON_ID: string) {
    const reasonUrl = urls.reason.replace('{REASON_ID}', REASON_ID);
    return deleteDoc(doc(this.fs, reasonUrl));
  }

  getBanners() {
    return getDocs(query(collection(this.fs, 'banner-management')));
  }

  // Services
  // addVehiclePackage(data: any) {
  //   addDoc(collection(this.fs, 'test/'), data).then((data) => {
  //     console.log('Doc added');
  //   });
  // }

  // ledger
  today = new Date();
  date = this.today.getDate() + '-' + this.today.getHours() + '-' + this.today.getFullYear();
  addLedgerCredit(creditData: any) {
    // console.log(this.date);
    addDoc(collection(this.fs, 'ledgers/ledger/' + this.date + '/'), creditData).then((data) => {
      console.log('Doc added');
    });
  }
  addLedgerDebit(debitData: any) {
    // console.log(this.date);
    addDoc(collection(this.fs, 'ledgers/ledger/' + this.date + '/'), debitData).then((data) => {
      console.log('Doc added');
    });
  }

  // Blogs
  addBlog(data: any) {
    addDoc(collection(this.fs, urls.blogs), data)
  }


  updateBlog(BLOG_ID: any, data: any) {
    const blogUrl = urls.blog.replace('{BLOG_ID}', BLOG_ID);
    return setDoc(doc(this.fs, blogUrl), data);
  }


  getBlogs() {
    return getDocs(query(collection(this.fs, urls.blogs)));
  }

  getSingleBlog(BLOG_ID: any) {
    const blogUrl = urls.blog.replace('{BLOG_ID}', BLOG_ID);
    return getDoc(doc(this.fs, blogUrl) );
  }

  addRentalServicePackage(packageData:RentalPackage){
    return addDoc(collection(this.fs,'service/rental/packages'),packageData)
  }

  getRentalServicePackages(){
    return getDocs(query(collection(this.fs,'service/rental/packages')));
  }

  updateRentalServicePackage(packageData:RentalPackage){
    return updateDoc(doc(this.fs,'service/rental/packages/'+packageData.id),{...packageData});
  }

  addGuideServicePackage(packageData:GuideRentalPackage){
    return addDoc(collection(this.fs,'service/guide/packages'),packageData)
  }

  getGuideServicePackages(){
    return getDocs(query(collection(this.fs,'service/guide/packages')));
  }

  updateGuideServicePackage(packageData:GuideRentalPackage){
    return updateDoc(doc(this.fs,'service/guide/packages/'+packageData.id),{...packageData});
  }

  getLocations(){
    return getDocs(query(collection(this.fs,'locations')));
  }

  addLocation(locationData:MapLocation){
    return addDoc(collection(this.fs,'locations'),locationData);
  }

  updateLocation(locationData:MapLocation){
    return updateDoc(doc(this.fs,'locations/'+locationData.id),{...locationData});
  }

  deleteLocation(location:MapLocation){
    return deleteDoc(doc(this.fs,'locations/'+location.id));
  }

  addVehicleCategory(mode:'rental'|'cab'|'outstation',categoryData:VehicleCategory){
    return addDoc(collection(this.fs,'service/'+mode+'/vehicleCategories'),categoryData);
  }

  getVehicleCategories(mode:'rental'|'cab'|'outstation'){
    return getDocs(query(collection(this.fs,'service/'+mode+'/vehicleCategories')));
  }

  deleteVehicleCategory(mode:'rental'|'cab'|'outstation',category:VehicleCategory){
    return deleteDoc(doc(this.fs,'service/'+mode+'/vehicleCategories/'+category.id));
  }

  updateVehicleCategory(mode:'rental'|'cab'|'outstation',category:VehicleCategory){
    return updateDoc(doc(this.fs,'service/'+mode+'/vehicleCategories/'+category.id),{...category});
  }

  addVehiclePricingPackage(mode:'rental'|'cab'|'outstation',pricingPackageData:VehiclePricingPackages){
    return addDoc(collection(this.fs,'service/'+mode+'/vehiclePricingPackages'),pricingPackageData);
  }

  saveVehiclePricingPackages(mode:'rental'|'cab'|'outstation',packages:VehiclePricingPackages[]){
    return setDoc(doc(this.fs,'service/'+mode),{packages:packages},{merge:true});
  }

  saveCommissionPackages(mode:'rental'|'cab'|'outstation'|'tours'|'guide',packages:VehicleCommissionPackages[]){
    return setDoc(doc(this.fs,'service/'+mode),{commissionPackages:packages},{merge:true});
  }

  getRentalService(){
    return getDoc(doc(this.fs,'service/rental'));
  }

  getGuideService(){
    return getDoc(doc(this.fs,'service/guide'));
  }

  getOutStationService(){
    return getDoc(doc(this.fs,'service/outstation'));
  }

  getCabService(){
    return getDoc(doc(this.fs,'service/cab'));
  }

  addTourAgent(agentData:any){
    return addDoc(collection(this.fs,'tour-agents'),agentData);
  }

  getTourAgents(){
    return getDocs(query(collection(this.fs,'tour-agents')));
  }

  addGuide(guideData:any){
    return addDoc(collection(this.fs,'guides'),guideData);
  }

  getGuides(){
    return getDocs(query(collection(this.fs,'guides')));
  }

  addDriver(driverData:any){
    return addDoc(collection(this.fs,'drivers'),driverData);
  }

  getDrivers(){
    return getDocs(query(collection(this.fs,'drivers')));
  }

  getCustomers(){
    return getDocs(query(collection(this.fs,'customers')));
  }

  addTour(tourData:any){
    return addDoc(collection(this.fs,'service/tours/tours'),tourData);
  }

  getTours(){
    return getDocs(query(collection(this.fs,'service/tours/tours')));
  }

  getTour(){
    return getDoc(doc(this.fs,'service/tours'));
  }

  addSpot(spotData:Spot){
    return addDoc(collection(this.fs,'spots'),spotData);
  }

  getSpots(){
    return getDocs(query(collection(this.fs,'spots')));
  }

  saveTaxSettings(taxSettings:TaxSettings){
    return setDoc(doc(this.fs,'siteData/settings'),taxSettings,{merge:true});
  }

  getTaxSettings(){
    return getDoc(doc(this.fs,'siteData/settings'));
  }

  deleteGuideServicePackage(packageData:GuideRentalPackage){
    return deleteDoc(doc(this.fs,'service/guide/packages/'+packageData.id));
  }

  getBookings(){
    return collectionData(query(collection(this.fs,'bookings')),{idField:'id'});
  }
}




