import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-board-dialog',
  template: `
    <h1 mat-dialog-title>Board</h1>
    <div mat-dialog-content class='content'>
    <p>What shall we call this board?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.title" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>  
      <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>
        Create
      </button>
      <button mat-button (click)="onNoClick()" style='margin-left:20px;'>Cancel</button>
    </div>
  `,
  styleUrls: ['./dialog.scss']
})

export class BoardDialogComponent implements OnInit {

  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
  }


  ngOnInit() {
    // this.form = this.fb.group({
    //     title: [this.title, []],
    //     // ..
    // });
}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
