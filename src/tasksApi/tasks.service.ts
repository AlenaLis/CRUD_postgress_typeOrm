import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private userRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<Task>): Promise<Task> {
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }

  async update(id: number, user: Partial<Task>): Promise<Task> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}