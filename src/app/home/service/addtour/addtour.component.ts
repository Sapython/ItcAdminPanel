import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notification/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { MapLocation } from 'src/structures/service.structure';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Agent, TourData, TourDay } from 'src/structures/booking.structure';


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
  holidayForm:FormGroup = new FormGroup({
    start: new FormControl('',Validators.required),
    end: new FormControl('',Validators.required)
  })

  images: { url: SafeUrl; file: File }[] = [];
  holidays: FormGroup[] = [];
  tourAgents: Agent[] = [];
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
  
  days: TourDay[] = [];
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
          activites: [
            {
              activity: '',
              description: '',
              endTime: '',
              startTime: '',
            },
          ],
        });
      }
      console.log('this.days', this.days);
    });
    this.holidayForm.valueChanges.pipe(debounceTime(700)).subscribe((data) => {
      console.log(this.holidayForm.status);
      if (this.holidayForm.controls['start'].value && this.holidayForm.controls['end'].value && this.holidayForm.status == 'VALID'){
        console.log("data",data,this.holidayForm.status);
        let newForm:FormGroup = new FormGroup({
          start: new FormControl(data.start),
          end: new FormControl(data.end)
        })
        this.holidays.push(newForm);
        // get the start and end date from all holidays which has biggest gap between them
        let start = new Date(this.holidays[0].controls['start'].value);
        let end = new Date(this.holidays[0].controls['end'].value);
        let gap = 0;
        for (let i = 0; i < this.holidays.length; i++) {
          let tempStart = new Date(this.holidays[i].controls['start'].value);
          let tempEnd = new Date(this.holidays[i].controls['end'].value);
          if (tempEnd.getTime() - tempStart.getTime() > gap) {
            gap = tempEnd.getTime() - tempStart.getTime();
            start = tempStart;
            end = tempEnd;
          }
        }
        console.log(start,end);
        // number of days between start and end date
        let days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        this.tourForm.controls['noOfDays'].setValue(days);
        this.tourForm.controls['noOfNights'].setValue(days - 1);
        this.holidayForm.reset();
        this.holidayForm.markAsUntouched();
      }
    })
  }

  addActivity(location:TourDay){
    console.log("add activity");
    location.activites.push({
      activity: '',
      description: '',
      endTime: '',
      startTime: '',
    })
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
    // return list of dates which are not in holidays
    let date = d;
    if (date) {
      for (let i = 0; i < this.holidays.length; i++) {
        let start = new Date(this.holidays[i].controls['start'].value);
        let end = new Date(this.holidays[i].controls['end'].value);
        if (date >= start && date <= end) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  addHoliday(event: any) {
    this.holidays.push(event.value);
  }

  deleteHoliday(date: FormGroup) {
    this.holidays = this.holidays.filter((holiday) => holiday != date);
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
          ...doc.data() as any,
          id: doc.id,
        } as Agent;
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
      // get value of holiday forms and add to localHolidays array
      let localHolidays =  this.holidays.map((holiday) => {
        return {
          start: holiday.controls['start'].value,
          end: holiday.controls['end'].value,
        };
      });
      Promise.all(uploadedImages).then((data) => {
        let tourData: TourData = {
          ...this.tourForm.value,
          holidays: localHolidays,
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
// convert this to interface {
  //   day: i + 1,
  //   startTime: '',
  //   endTime: '',
  //   activity: '',
  //   description: '',
  // }


// let tourData: any = {
//   ...this.tourForm.value,
//   holidays: this.holidays,
//   days: this.days,
//   images: data,
//   enabled: true,
//   features:this.Features
// };
// generate interface for tourData
