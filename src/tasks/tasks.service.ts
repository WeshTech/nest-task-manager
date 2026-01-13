import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { Task } from 'generated/prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(taskDto: CreateTaskDto): Promise<Task> {
    const { title, priority, status, userID } = taskDto;
    console.log('Creating task with data:', taskDto);

    try {
      const createdTask = await this.prisma.task.create({
        data: {
          title,
          priority,
          status,
          user: { connect: { id: userID } },
        },
      });

      return createdTask;
    } catch {
      throw new InternalServerErrorException('Failed to create task');
    }
  }
}
