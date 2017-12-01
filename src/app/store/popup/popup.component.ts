import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Option } from '../../model/option.model';

@Component({
  selector: 'vs-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent implements OnInit {
  public option: Option;
  public type: string;
  public missed = true;

  constructor() { }

  ngOnInit() {
  }

}
