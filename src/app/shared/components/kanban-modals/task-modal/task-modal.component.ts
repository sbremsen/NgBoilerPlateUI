import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Board } from 'src/app/kanban/board.model';


@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.scss']
  })
  export class TaskModalComponent implements OnInit {
    @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  
    title: string;
    boardData: Subject<Board> = new Subject();
    board: Board = {};
  
    constructor(public modalRef: MDBModalRef) { }
  
    ngOnInit() {
    }
}