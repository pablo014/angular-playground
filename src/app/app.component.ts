import { Component } from '@angular/core';
import { NavBarItem } from './nav-bar/NavBar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';
  navBarItems: NavBarItem[] = [
  {
  name: 'test',
  url: '/test',
  }]
}
