import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LabelDTO } from '../../core/module/label/label';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: LabelDTO
  ) {}

  editTask() {
    console.log(this.data);
    console.log('DATA ==>>' + typeof this.data);
    console.log(this.data);
    this.dialogRef.close(this.editForm);
    for (let i = 0; i < 10; i++) {}
  }

  editForm = this.formBuilder.nonNullable.group({});
}
