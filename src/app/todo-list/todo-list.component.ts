import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTask: string = '';

  myTasks : string[] = [];

  addTask() {
    if(this.newTask.trim() !== ''){
      this.myTasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

}
