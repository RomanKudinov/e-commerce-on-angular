import { NavigationService } from './shared/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private _navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  get navigation() {
    return this._navigationService.getNavigation();
  }

}
