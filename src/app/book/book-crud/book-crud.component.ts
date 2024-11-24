import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-book-crud',
  templateUrl: './book-crud.component.html',
  styleUrl: './book-crud.component.css',
})
export class BookCrudComponent implements OnInit {
  isShowModal: boolean = false;

  constructor() {}

  ngOnInit() {}

  showModal() {
    this.isShowModal = true;
  }

  hideModal() {
    this.isShowModal = false;
  }
}
