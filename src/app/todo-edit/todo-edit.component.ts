
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService, private router: Router) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos().then((todos) => {
      this.todos = todos;
    });
  }

  editTodo(todo: Todo): void {
    this.router.navigate(['/'], { state: { editTodo: todo } });
  }
}
