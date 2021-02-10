import { Component, OnInit, OnDestroy  } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';

import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


import { BoardModalComponent } from 'src/app/shared/components/kanban-modals/board-modal/board-modal.component';
import { BoardDialogComponent } from '../dialogs/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[];
  sub: Subscription;
  dialogRef: MatDialogRef<BoardDialogComponent>;

  modalRef: MDBModalRef;
  modalConfig = {
    class: 'modal-dialog-centered'
  };

  constructor(public boardService: BoardService, public dialog: MatDialog,  private modalService: MDBModalService, ) {}

  ngOnInit() {
    debugger;
    this.sub = this.boardService
      .getUserBoards()
      .subscribe(boards => (this.boards = boards));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  openBoardDialog(): void {
    debugger;

    this.modalRef = this.modalService.show(BoardModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Add A Task Board';
    //  this.dialogRef = this.dialog.open(BoardDialogComponent, {
    //   width: '400px',
    //   data: {  }
    // });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        this.boardService.createBoard({
          title: result,
          priority: this.boards.length
        });
      }
    });
  }

}
