import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'vs-top-line',
  templateUrl: './top-line.component.html',
  styleUrls: ['./top-line.component.sass']
})
export class TopLineComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}
