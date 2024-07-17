import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../service/task/task.service';
import { TaskDTO } from '../taskDTO';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDTO } from '../addTaskDTO';
import { Status } from '../taskEnum';
import { AddTaskComponent } from '../../../../components/add-task/add-task.component';
import { timeout } from 'rxjs';
import { EditTaskComponent } from '../../../../components/edit-task/edit-task.component';
import { TaskLabel } from './TaskLabel';
import { LabelDTO } from '../../label/label';

@Component({
  selector: 'app-tag',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  constructor(
    private service: TaskService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}
  tasks: any = [];
  newDto: LabelDTO = { id: 0, labelName: '' };
  dto: AddTaskDTO = { title: '', description: '', status: Status.New };
  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable() {
    this.service.getAllTasks().subscribe({
      next: (value) => {
        this.tasks = value;
      },
    });
  }

  labelClick(num: number) {
    this.toastr.success(num.toString());
  }

  addTaskDialog() {
    let dialog = this.dialog.open(AddTaskComponent, {
      width: '300px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
    });
    dialog.afterClosed().subscribe({
      next: (response) => {
        if (response != undefined) {
          this.dto.title = response.value.title;
          this.dto.description = response.value.description;
          this.dto.status = response.value.status;

          this.service.createTask(this.dto).subscribe({
            next: (resp) => {
              this.refreshTable();
              this.toastr.success('Task created', '', { timeOut: 2000 });
            },
          });
        }
      },
    });
  }

  editLabel(data: any) {
    //console.log(typeof data);
    //console.log(data[0]);

    for (let i = 0; i < data.length; i++) {
      //console.log(data[i].label.labelName);
      // this.newDto.id += data[i].label.id;
      // this.newDto.labelName += data[i].label.labelName;
      this.newDto = data[i].label;
    }
    this.newDto = data.label;
    let dialog = this.dialog.open(EditTaskComponent, {
      width: '300px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
      data: this.newDto,
    });
    dialog.afterClosed().subscribe({
      next: (retValue) => {
        // this.toastr.info(retValue);
      },
    });
  }
}
