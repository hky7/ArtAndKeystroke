import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component';
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

  constructor(private modalService: NgbModal) { }

  open(modalContent) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.title = modalContent.title;
    modalRef.componentInstance.content = modalContent.content;
  }

  ngOnInit() {
  }

}
