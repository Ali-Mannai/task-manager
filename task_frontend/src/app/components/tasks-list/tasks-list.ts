import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import Task from '../../models/Task.model';
import { CommonModule } from '@angular/common';
import { AddTaskModal } from "../add-task-modal/add-task-modal";

@Component({
  selector: 'app-tasks-list',
  imports: [CommonModule, AddTaskModal],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksListComponent {

  tasks: Task[] = [];
  isAddTaskModalOpen = false;


  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.loadTasks();
  }
  // loadTasks() {
  //   this.taskService.getTasks().subscribe((tasks: any) => {
  //     console.log(tasks);
  //   });
  // }
  loadTasks() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  openAddTaskModal() {
    this.isAddTaskModalOpen = true;
  }

  closeAddTaskModal() {
    this.isAddTaskModalOpen = false;
    this.loadTasks();
  }

  onTaskAdded(newTask: Task) {
    console.log("New task added:", newTask);
    // this.tasks.push(newTask);
    this.taskService.createTask(newTask).subscribe(() => {
      this.loadTasks();
    });
    this.closeAddTaskModal();
  }

}
