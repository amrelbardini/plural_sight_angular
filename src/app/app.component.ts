import { Component } from '@angular/core';
import { slideInAnimation } from './shared/animations/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'angular-revision';
}
