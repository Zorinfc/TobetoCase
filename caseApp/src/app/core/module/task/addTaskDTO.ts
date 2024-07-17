import { Status } from './taskEnum';

export class AddTaskDTO {
  constructor(
    public title: string,
    public description: string,
    public status: Status
  ) {}
}
