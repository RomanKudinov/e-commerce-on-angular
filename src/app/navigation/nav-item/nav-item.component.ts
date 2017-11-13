import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, AfterViewInit, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';

import { NavItem } from '../../model/nav-item.model';


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
export class NavItemComponent implements OnInit, AfterViewInit {
  @Input() item: NavItem;
  @ViewChild('section') section: ElementRef;
  public state = 'start';

  constructor(private _renderer: Renderer2,
    private _router: Router,
    private _vcr: ViewContainerRef) { }

  ngOnInit() {
    const $mouseenter = Observable.fromEvent(this._vcr.element.nativeElement, 'mouseenter')
      .map((e) => 'end');
    const $mouseleave = Observable.fromEvent(this._vcr.element.nativeElement, 'mouseleave')
      .map((e) => 'start');

      $mouseenter.merge($mouseleave).subscribe((state) => {
        this.state = state;
      });
  }

  ngAfterViewInit() {
    if (this.item.section) {
      this.renderedSection(this.item.section, this.section.nativeElement);
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

    if (elem.link) {
      this._renderer.listen(currentElem, 'click', () => {
        this._router.navigateByUrl(`${elem.link}`);
      });
    }

    this._renderer.appendChild(parent, currentElem);

    if (elem.children) {
      elem.children.forEach((child) => {
        this.renderedSection(child, currentElem);
      });
    }
  }
}
