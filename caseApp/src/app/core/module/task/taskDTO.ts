import { Status } from './taskEnum';

interface TaskLabel {
  label: string;
  task: string;
}

export class TaskDTO {
  constructor(
    private title: string,
    private description: string,
    private status: Status,
    private taskLabels: TaskLabel
  ) {}
}
