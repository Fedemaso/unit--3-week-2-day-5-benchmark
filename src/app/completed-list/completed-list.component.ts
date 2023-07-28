
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.scss'],
})
export class CompletedListComponent implements OnInit {
  completedTodos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getCompletedTodos();
  }

  getCompletedTodos(): void {
    this.completedTodos = this.todosService.getCompletedTodos();
  }

  deleteCompleted(todo: Todo): void {
    this.todosService.removeCompletedTodoWithSpinner(todo);
    this.getCompletedTodos();
  }
}
