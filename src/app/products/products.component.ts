import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products;
  originalProducts;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.originalProducts = data;
    });
  }

  sortByAlphabetical() {
   this.products =  _.sortBy(this.products, ['TITLE']);
  }

  sortByLowestPrice() {
    this.products =  _.orderBy(this.products, ['PRICE'], ['asc']);
  }

  sortByHighestPrice() {
    this.products =  _.orderBy(this.products, ['PRICE'], ['desc']);
  }

  sortByFeatured() {
    this.products = this.originalProducts;
  }

  onButtonGroupClick(event) {
    const clickedElement = event.target || event.srcElement;

    if (clickedElement.nodeName === 'LABEL' ) {

      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
  }
}
