import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'info-dialog',
  templateUrl: 'info.dialog.html',
})
export class InfoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  title: string;
  information: string;
}
