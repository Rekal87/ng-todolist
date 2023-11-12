import { Component } from '@angular/core';
import { ToDoComponent } from './component/to-do/to-do.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do';
}
