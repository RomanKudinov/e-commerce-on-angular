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
import { PopupComponent } from '../popup/popup.component';
import { ModalResults } from '../../shared/modal-results.enum';


@Component({
  selector: 'vs-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass'],
  providers: [ModalService]
})
export class OptionComponent implements OnInit {
  @ViewChild('popup', { read: ViewContainerRef }) popup: ViewContainerRef;
  @Input() option: Option;
  @Input() type: string;
  @Input() index: number;
  @Output() title = new EventEmitter<Option>();
  public missed = false;


  constructor(private _filterService: FilterService,
    private _modalService: ModalService) {
  }

  ngOnInit() {
    this._modalService.init(this.popup);

    this._filterService.getItem().subscribe((item) => {
      this._filterOption(item);
    });
  }

  showPopup() {
    if (this.type !== 'color' && !this.missed) {
      return;
    }
    console.log('create');
    this._createPopupComponent({option: this.option, type: this.type, missed: this.missed});
  }

  hidePopup() {
    if (this.type !== 'color' && !this.missed) {
      return;
    }
    this._modalService.state.next(ModalResults.Closed);
  }

  private _createPopupComponent(data: any) {
    const $modalState = this._modalService.showModal(PopupComponent, data);

    $modalState.subscribe((state: ModalResults) => {
      if (state = ModalResults.Closed) {
        this._modalService.modalContainer.clear();
        $modalState.unsubscribe();
      }
    });
  }

  private _filterOption(missItem) {
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
