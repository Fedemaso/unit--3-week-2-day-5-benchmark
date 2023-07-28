
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  completedTodos: Todo[] = [];
  todosLoaded = false;


  private todosUpdated = new Subject<Todo[]>();

  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      if (this.todosLoaded) {
        resolve(this.todos);
      } else {
        setTimeout(() => {
          this.todos = [


          ];
          this.todosLoaded = true;
          resolve(this.todos);
          this.emitTodosUpdate();
        }, 2000);
      }
    });
  }

  addTodoWithSpinner(todo: Todo): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos.push(todo);
        resolve();
        this.emitTodosUpdate();
      }, 2000);
    });
  }

  updateTodoWithSpinner(todo: Todo): Promise<void> {
    return new Promise((resolve) => {
      const index = this.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        setTimeout(() => {
          this.todos[index] = todo;
          resolve();
          this.emitTodosUpdate();
        }, 2000);
      } else {
        resolve();
      }
    });
  }

  removeTodoWithSpinner(todo: Todo): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
        resolve();
        this.emitTodosUpdate();
      }, 2000);
    });
  }

  addCompletedTodoWithSpinner(todo: Todo): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.completedTodos.push(todo);
        resolve();
      }, 2000);
    });
  }

  removeCompletedTodoWithSpinner(todo: Todo): void {
    this.completedTodos = this.completedTodos.filter((t) => t.id !== todo.id);
  }

  getCompletedTodos(): Todo[] {
    return this.completedTodos;
  }


  onTodosUpdate(): Observable<Todo[]> {
    return this.todosUpdated.asObservable();
  }


  private emitTodosUpdate(): void {
    this.todosUpdated.next([...this.todos]);
  }
}
