
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'completed', component: CompletedListComponent },
  { path: 'todo-edit', component: TodoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
