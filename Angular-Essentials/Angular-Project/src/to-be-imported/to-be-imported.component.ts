import { Component } from '@angular/core';
import { NgIf,NgClass } from '@angular/common';
@Component({
  selector: 'app-to-be-imported',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './to-be-imported.component.html',
  styleUrl: './to-be-imported.component.css'
})
export class ToBeImportedComponent {
  reveal:boolean =true;
  apes = "ngIf test";
  onReveal(){
    this.reveal=!this.reveal;
  }
}

export class mediaitem 
{
  medium:string = '';

  name:string = '';

  category:string = '';

  year:number;
  constructor(meduium:string, name:string , category:string, year:number)
  {
    this.medium=meduium;
    this.category=category;
    this.name=name;
    this.year=year;
  }
}
