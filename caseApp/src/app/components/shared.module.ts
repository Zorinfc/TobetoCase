import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddLabelComponent } from './add-label/add-label.component';

@NgModule({
  declarations: [AddTaskComponent, EditTaskComponent, AddLabelComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
