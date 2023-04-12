import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { MapLocation } from 'src/structures/service.structure';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.scss'],
})
export class AddtourComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  FeaturesCtrl = new FormControl('');
  filteredFeatures: Observable<string[]> | any;
  Features: string[] = [''];
  allFeatures: string[] = ['Sightseeing', 'Meals', 'Travel', 'Accommodation', 'Guide'];


  @ViewChild('FeaturesInput') FeaturesInput: ElementRef<HTMLInputElement>| any;



  images: { url: SafeUrl; file: File }[] = [];
  holidays: Date[] = [];
  tourAgents: any[] = [];
  tourForm: FormGroup = new FormGroup({
    tourName: new FormControl(''),
    tourPrice: new FormControl(''),
    tourAgent: new FormControl(''),
    aboutTour: new FormControl(''),
    noOfDays: new FormControl(0),
    noOfNights: new FormControl(0),
    pickupLocation: new FormControl(''),
    dropOffLocation: new FormControl(''),
  });
  days: any[] = [];
  locations: MapLocation[] = [];
  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private dataProvider: DataProvider,
    private alertify: AlertsAndNotificationsService
  ) {

    this.filteredFeatures = this.FeaturesCtrl.valueChanges.pipe(
      startWith(null),
      map((Features: string | null) => (Features ? this._filter(Features) : this.allFeatures.slice())),
    );
    console.log(this.filteredFeatures);


    this.tourForm.valueChanges.subscribe((data) => {
      console.log(data);
      data.noOfDays = parseInt(data.noOfDays);
      data.noOfNights = parseInt(data.noOfNights);
      this.days = [];
      for (let i = 0; i < data.noOfDays; i++) {
        this.days.push({
          day: i + 1,
          startTime: '',
          endTime: '',
          activity: '',
          description: '',
        });
      }
      console.log('this.days', this.days);
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Features
    if (value) {
      this.Features.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.FeaturesCtrl.setValue(null);
    console.log(this.Features);
  }

  remove(Features: string): void {
    const index = this.Features.indexOf(Features);

    if (index >= 0) {
      this.Features.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.Features.push(event.option.viewValue);
    this.FeaturesInput.nativeElement.value = '';
    this.FeaturesCtrl.setValue(null);
    console.log(this.Features);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFeatures.filter(Features => Features.toLowerCase().includes(filterValue));
  }

  imagesDropped(event: any) {
    console.log(event);
  }

  imagesSelected(event: any) {
    console.log(event);
    let files = event.target.files;
    // check if the file is an image if yes then add it to images array
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith('image')) {
        this.images.push({
          url: this.sanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL(files[i])
          ),
          file: files[i],
        });
      }
    }
  }

  cancel() {
    if (confirm('Are you sure you want to cancel?')) {
      this.tourForm.reset();
      this.router.navigateByUrl('/service');
    }
  }

  myFilter = (d: Date | null): boolean => {
    // Prevent duplicates from holidays
    return !this.holidays.some((holiday) => holiday.getTime() === d?.getTime());
  };

  addHoliday(event: any) {
    this.holidays.push(event.value);
  }

  deleteHoliday(date: Date) {
    this.holidays = this.holidays.filter((holiday) => holiday !== date);
  }

  ngOnInit(): void {
    this.getAgents();
    this.getLocations();
  }

  getLocations() {
    this.databaseService.getLocations().then((data) => {
      this.locations = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        } as MapLocation;
      });
    });
  }



  getAgents() {
    this.databaseService.getTourAgents().then((data) => {
      this.tourAgents = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
    });
  }

  submit() {
    console.log(this.tourForm.value);
    if (this.tourForm.valid && confirm('Are you sure you want to submit?')) {
      // let uploadedImages = []
      let uploadedImages = this.images.map(async (image) => {
        return await this.databaseService.upload(
          'tours/' + this.tourForm.value.name + '/' + image.file.name,
          image.file
        );
      });
      this.dataProvider.pageSetting.blur = true;
      Promise.all(uploadedImages).then((data) => {
        let tourData: any = {
          ...this.tourForm.value,
          holidays: this.holidays,
          days: this.days,
          images: data,
          enabled: true,
          features:this.Features
        };
        console.log("tourData", tourData);
        this.databaseService.addTour(tourData).then((data) => {
          this.alertify.presentToast('Tour added successfully');
          // reset values
          this.tourForm.reset();
          this.images = [];
          this.holidays = [];
          this.days = [];
          this.Features = [];
          this.router.navigateByUrl('/service');
        }).catch((err) => {
          this.alertify.presentToast('Error adding tour');
        }).finally(() => {
          this.dataProvider.pageSetting.blur = false;
        });
      }).catch((err) => {
        this.dataProvider.pageSetting.blur = false;
      });
    }
  }
}
