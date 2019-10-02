import {Component, Input, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
@Input() modalTemplate;

  constructor(private modalService: NgbModal) { }

  open(modalTemplateComponent, className) {
    const modalRef = this.modalService.open(modalTemplateComponent, {windowClass: className});
    this.modalTemplate = modalRef;
  }

  ngOnInit() {
  }

}
