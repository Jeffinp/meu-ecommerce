import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {
  constructor(private location: Location) {}

  voltar() {
    this.location.back();
  }
}
