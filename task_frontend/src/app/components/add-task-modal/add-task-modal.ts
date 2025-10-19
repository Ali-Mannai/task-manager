import { Component, EventEmitter, Output } from '@angular/core';
import Task from '../../models/Task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-modal',
  imports: [FormsModule],
  templateUrl: './add-task-modal.html',
  styleUrls: ['./add-task-modal.css']
})
export class AddTaskModal {
  @Output() taskAdded = new EventEmitter<Task>();
  @Output() close = new EventEmitter<void>();

  // Bindings used in the template (ngModel)
  taskTitle: string = '';
  taskDescription: string = '';
  taskCompleted: boolean = false;

  constructor() { }
  ngOnInit() { }

  emitClose() {
    this.close.emit();
  }

  addTask() {
    if (this.taskTitle.trim() && this.taskDescription.trim()) {
      const newTask: Task = {
        title: this.taskTitle.trim(),
        description: this.taskDescription.trim(),
        completed: this.taskCompleted
      };

      this.taskAdded.emit(newTask);

      // reset form fields
      this.taskTitle = '';
      this.taskDescription = '';
      this.taskCompleted = false;
    }
  }

}
