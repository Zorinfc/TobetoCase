import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, TaskRoutingModule, ReactiveFormsModule],
})
export class TaskModule {}
