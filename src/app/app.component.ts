import { NavigationService } from './shared/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  navigation: any;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.getNavigation().subscribe(
      (res) => {
        this.navigation = res;
        console.log(this.navigation);
      });
  }

}
