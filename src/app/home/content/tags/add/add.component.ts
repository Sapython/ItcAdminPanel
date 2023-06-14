import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tag } from '../tags.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  tagForm:FormGroup = new FormGroup({
    name:new FormControl(''),
    color:new FormControl(''),
  })
}
