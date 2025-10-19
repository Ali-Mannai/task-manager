import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api/tasks/';

  getTasks() {
    console.log("Fetching tasks from API");
    console.log(this.http.get(this.apiUrl));
    return this.http.get(this.apiUrl);
  }
  getTask(id: number) {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
  createTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }
  updateTask(id: number, task: any) {
    return this.http.put(`${this.apiUrl}${id}/`, task);
  }
  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
