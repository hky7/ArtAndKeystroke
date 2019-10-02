import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {AllYearModalComponent} from '../custom-modals/all-year-modal/all-year-modal.component';
import {CactusProductModalComponent} from '../custom-modals/cactus-product-modal/cactus-product-modal.component';

@Component({
  selector: 'app-portfolio-plant',
  templateUrl: './portfolio-plant.component.html',
  styleUrls: ['./portfolio-plant.component.sass']
})
export class PortfolioPlantComponent implements OnInit {
  @Input() open;
  constructor(private modal: ModalComponent) { }

  ngOnInit() {
  }

  openAllYearModal() {
    this.modal.open(AllYearModalComponent, 'custom-plant-year-modal');
  }

  openCactusProductModal() {
    this.modal.open(CactusProductModalComponent, 'custom-cactus-product-modal');
  }
}
