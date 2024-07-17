import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrl: './add-label.component.scss',
})
export class AddLabelComponent {
  constructor(public dialogRef: MatDialogRef<AddLabelComponent>) {}
  name: string = '';

  addLabel() {
    this.dialogRef.close(this.name);
  }
}
