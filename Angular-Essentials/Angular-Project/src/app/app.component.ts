import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToBeImportedComponent } from '../to-be-imported/to-be-imported.component';
import { DatabindingTestComponent } from './databinding-test/databinding-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToBeImportedComponent, DatabindingTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';
}
