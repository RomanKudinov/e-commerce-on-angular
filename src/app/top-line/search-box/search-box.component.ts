import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'vs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass'],
  animations: [
    trigger('showSearchBox', [
      state('close', style({
        opacity: '0'
      })),
      state('open', style({
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('close <=> open', animate('300ms ease-in'))
    ]),
    trigger('showBottomBorder', [
      state('close', style({
        borderBottom: '1px solid #232323'
      })),
      state('open', style({
        borderBottom: '1px solid #fff'
      }))
    ])
  ]
})
export class SearchBoxComponent implements OnInit {
  public state = 'close';
  @ViewChild('search') private input: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  animate() {
    switch (this.state) {
      case 'close':
        this.state = 'open';
        this.input.nativeElement.focus();
        break;
      case 'open':
        this.search();
        break;
    }
  }

  unBlur() {
    if (this.input.nativeElement.value === '') {
      this.state = 'close';
    }
  }

  search() {

  }
}
