import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../module/task/taskDTO';
import { AddTaskDTO } from '../../module/task/addTaskDTO';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  getAllTasks(): Observable<TaskDTO> {
    return this.httpClient.get<TaskDTO>('/task');
  }

  createTask(dto: AddTaskDTO): Observable<any> {
    return this.httpClient.post('/task/create', dto);
  }
}
