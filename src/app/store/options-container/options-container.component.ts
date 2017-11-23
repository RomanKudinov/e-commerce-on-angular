import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../model/option.model';

@Component({
  selector: 'vs-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.sass']
})
export class OptionsContainerComponent implements OnInit {
  @Input() options: Option[];
  @Input() type: string;
  @Output() lineOption: EventEmitter<Option> = new EventEmitter<Option>();
  public title: string;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(option: Option) {
    this.title = option.title;
    this.lineOption.emit(option);
  }

}
