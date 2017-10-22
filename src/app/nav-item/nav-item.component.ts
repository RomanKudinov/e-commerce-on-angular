import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'vs-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.sass'],
  animations: [
    trigger('showNavigation', [
      state('start', style({
        display: 'none',
      })),
      state('end', style({
        dislay: 'block',
      }))
    ]),
    trigger('sylishListItem', [
      state('start', style({
        color: '#000',
        borderBottom: ''
      })),
      state('end', style({
        color: '#d91560',
        borderBottom: '2px solid #d91560'
      }))
    ])
  ]
})
export class NavItemComponent implements AfterViewInit {
  @Input() item: Object;
  @ViewChild('section') section: ElementRef;
  public state = 'start';

  constructor(private _renderer: Renderer2) { }

  ngAfterViewInit() {
    if (this.item[1]) {
      this.renderedSection(this.item[1], this.section.nativeElement);
    }
  }

  renderedSection(elem, parent) {
    const currentElem = this._renderer.createElement(elem.tagName);

    if (elem.class) {
      elem.class.forEach ?
      elem.class.forEach((i) => this._renderer.addClass(currentElem, i)) : this._renderer.addClass(currentElem, elem.class);
    }

    if (elem.content) {
      const text = this._renderer.createText(elem.content);
      this._renderer.appendChild(currentElem, text);
    }

    this._renderer.appendChild(parent, currentElem);

    if (elem.children) {
      elem.children.forEach((child) => {
        this.renderedSection(child, currentElem);
      });
    }
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
