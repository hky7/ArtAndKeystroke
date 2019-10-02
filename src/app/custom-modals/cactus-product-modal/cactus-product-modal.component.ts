import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cactus-product-modal',
  templateUrl: './cactus-product-modal.component.html',
  styleUrls: ['./cactus-product-modal.component.sass']
})
export class CactusProductModalComponent implements OnInit {
  productImgs = ['minimal_cactus.jpg', 'red_cactus.jpg', 'tall_cactus.jpg'];
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
