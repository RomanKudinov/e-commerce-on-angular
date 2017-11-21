import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../../model/product.model';

@Component({
  selector: 'vs-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.sass']
})
export class OptionsContainerComponent implements OnInit {
  @Input() options: Option[];
  @Input() type: string;
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
