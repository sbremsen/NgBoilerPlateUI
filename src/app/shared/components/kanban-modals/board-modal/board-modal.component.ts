import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Board } from 'src/app/kanban/board.model';

@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.scss'],
  exportAs: 'boardForm'
})

export class BoardModalComponent implements OnInit {
  @ViewChild('titleForm', { static: true }) titleForm: NgForm;

  title: string;
  boardData: Subject<Board> = new Subject();
  board: Board = {};

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  onSave() {
    if (this.titleForm.valid) {
      this.boardData.next(this.board);
    this.modalRef.hide();
    } else {
      const controls = this.titleForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }
}
