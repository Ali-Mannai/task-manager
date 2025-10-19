import { Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list';

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksListComponent },
];
