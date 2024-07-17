import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private formBuilder: FormBuilder
  ) {}

  addTask() {
    this.dialogRef.close(this.taskForm);
  }

  taskForm = this.formBuilder.nonNullable.group({
    title: [''],
    description: [''],
    status: ['NEW'],
  });
}
