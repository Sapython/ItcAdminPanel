import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Spot } from 'src/structures/service.structure';
import { AddSpotComponent } from '../dialog/add-spot/add-spot.component';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit{
  spots:Spot[]= []
  constructor(private dialog:MatDialog,private databaseService:DatabaseService){}
  addBlog(){
    this.dialog.open(AddSpotComponent)
  }
  ngOnInit(): void {
    this.getSpot()
  }

  getSpot(){
    this.databaseService.getSpots().then(data=>{
      console.log(data)
      this.spots = data.docs.map(doc=>{
        return {...doc.data(),id:doc.id} as Spot
      })
    })
  }
}
