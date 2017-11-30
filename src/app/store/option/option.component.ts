import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { FilterService } from '../../shared/filter.service';
import { Option } from '../../model/option.model';
import { ModalService } from '../../shared/modal.service';


@Component({
  selector: 'vs-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass']
})
export class OptionComponent implements OnInit {
  @ViewChild('popup', {read: ViewContainerRef}) popup: ViewContainerRef;
  @Input() option: Option;
  @Input() type: string;
  @Input() index: number;
  @Output() title = new EventEmitter<Option>();
  public hovered = false;
  public missed = false;


  constructor(private _filterService: FilterService,
    private _modalService: ModalService) {
  }

  ngOnInit() {
    this._filterService.getItem().subscribe((item) => {
      this.filterOption(item);
    });
  }

  changeState(type: string, hovered: boolean) {
    if (type === 'color') {
      this.hovered = hovered;
    }
  }

  private filterOption(missItem) {
    for (const item in missItem) {
      if (missItem[item] !== null) {
        const missing = missItem[item].some(elem => elem === this.option.title);
        if (missing) {
          this.missed = missing;
          return;
        }

        this.missed = missing;
      }
    }
    this.missed = false;
  }

  sendOption() {
    if (!this.missed) {
      this.changeTitle();
      if (this.option.miss) {
        this._filterService.sendOption(this.option.miss, this.type);
        return;
      }
      this._filterService.sendOption(null, this.type);
    }
  }

  changeTitle() {
    this.title.emit(this.option);
  }
}
