import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-year-modal',
  templateUrl: './all-year-modal.component.html',
  styleUrls: ['./all-year-modal.component.sass']
})
export class AllYearModalComponent implements OnInit {
@Input() modalClass = 'custom-all-year-modal';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
