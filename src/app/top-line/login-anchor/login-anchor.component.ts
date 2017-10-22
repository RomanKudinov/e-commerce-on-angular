import { Component, OnInit, HostListener, EmbeddedViewRef } from '@angular/core';

@Component({
  selector: 'vs-login-anchor',
  templateUrl: './login-anchor.component.html',
  styleUrls: ['./login-anchor.component.sass']
})
export class LoginAnchorComponent implements OnInit {
  public checkColor = 'white';
  public currentSize = 5;
  constructor() { }

  state: boolean;

  @HostListener('mouseenter')
  showPopover() {
    this.state = true;
  }

  @HostListener('mouseleave')
  hidePopover() {
    this.state = false;
  }

  ngOnInit() {
  }
}
