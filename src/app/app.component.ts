// import looks for a given class from a given file location
import { Component } from '@angular/core';

// All components have a component decorator. A component decorator is where we create the relationship between components, styles, and templates.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// All Angular components export a class. This class contains the business logic that powers a given component. This logic affects the *.component.html file that is defined by templateUrl in the component decorator.
export class AppComponent {
  title = 'NASA\'s Astronomy Picture of the Day';
}
