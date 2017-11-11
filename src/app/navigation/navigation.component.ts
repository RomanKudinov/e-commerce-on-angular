import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'vs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  public state = 'start';

  constructor(private _navigationService: NavigationService) { }

  get navigation() {
    return this._navigationService.getNavigation();
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  changeStateToBlock() {
    this.state = 'end';
  }

  @HostListener('mouseleave')
  changeStateToNone() {
    this.state = 'start';
  }

}
