

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';
  showLoadingSpinner: boolean = false;

  constructor(private todosService: TodosService, private router: Router) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.showLoadingSpinner = true;
    this.todosService.getTodos().then((todos) => {
      this.todos = todos;
      this.showLoadingSpinner = false;
    });
  }

  addTodo(): void {
    const trimmedTodo = this.newTodo.trim();
    if (trimmedTodo) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: trimmedTodo,
        completed: false,
      };
      this.todosService.addTodoWithSpinner(newTodo).then(() => {
        this.getTodos();
      });
      this.newTodo = '';
    }
  }

  completeTodoWithSpinner(todo: Todo): void {
    this.showLoadingSpinner = true;
    this.todosService.removeTodoWithSpinner(todo).then(() => {
      this.todosService.addCompletedTodoWithSpinner(todo).then(() => {
        this.getTodos();
        this.showLoadingSpinner = false;
      });
    });
  }
}
