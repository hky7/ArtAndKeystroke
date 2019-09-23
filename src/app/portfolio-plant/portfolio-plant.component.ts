import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

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
    const modalContent = {
      title: 'Plants All Year Round',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Donec mollis metus sed porttitor sodales. Maecenas vestibulum semper ' +
      'lobortis. Ut luctus urna non arcu aliquam mattis. In hac habitasse platea dictumst. ' +
      'In ligula turpis, iaculis nec tincidunt fringilla, condimentum id ante. Quisque nec ' +
      'egestas odio, non eleifend justo.'
    };

    this.modal.open(modalContent);
  }
}
