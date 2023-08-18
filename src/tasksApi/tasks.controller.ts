import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    const task = await this.tasksService.findOne(id);
    if (!task) {
      throw new NotFoundException('task does not exist!');
    } else {
      return task;
    }
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  async update (@Param('id') id: number, @Body() task: Task): Promise<any> {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const task = await this.tasksService.findOne(id);
    if (!task) {
      throw new NotFoundException('task does not exist!');
    }
    return this.tasksService.delete(id);
  }
}
