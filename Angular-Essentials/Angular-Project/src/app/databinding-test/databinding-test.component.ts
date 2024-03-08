import { Component,OnInit } from '@angular/core';
import { ToBeImportedComponent,mediaitem } from '../../to-be-imported/to-be-imported.component';
import { Input } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { Service } from './databinding-test.service';


@Component({
  selector: 'app-databinding-test',
  templateUrl: './databinding-test.component.html',
  standalone: true,
  styleUrl: './databinding-test.component.css',
  imports: [ToBeImportedComponent, FormsModule, NgFor,ReactiveFormsModule, NgClass, NgIf]
})
export class DatabindingTestComponent implements OnInit
{
  real:boolean;
  form:FormGroup;
  mediaitemlist:mediaitem[] = [];
  data: string[] = ['Dummy data'];
  @Input() DummyString: string;

  constructor(private MediaItemService:Service)
  {
    this.DummyString= '';
    this.form = new FormGroup({
    });
    this.real = true;
  }

  ngOnInit(){
    this.mediaitemlist=this.MediaItemService.getMediaitem();

    this.form = new FormGroup ({
      medium: new FormControl('Movies'),
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      category: new FormControl('Romance'),
      year : new FormControl ('2019',Validators.compose([
        Validators.required,
      ])),
    })
  }

  yearvalidator(control: FormControl)
  {
    if (control.value >= 2024 || control.value <= 1920)
    {
      return null
    }
    else return {year: true};
  }

  onSubmit(cows:mediaitem)
  {
    console.log(cows);
    this.MediaItemService.addMediaitem(cows);
  }

  onDelete(mediaitem:mediaitem){
    const index = this.MediaItemService.deleteMediaitem(mediaitem);
  }

  addData(m:string)
  {
    console.log(m);
    if (m === '')
    this.real = false;
  else
  {
    this.data.push(m);
    this.real= true;
  }
  }
}
