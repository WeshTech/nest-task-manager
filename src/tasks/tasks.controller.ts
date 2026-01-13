import { Body, Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() taskDto: CreateTaskDto) {
    return await this.tasksService.createTask(taskDto);
  }
}
