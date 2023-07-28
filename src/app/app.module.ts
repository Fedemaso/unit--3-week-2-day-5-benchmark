

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [AppComponent, TodoListComponent, CompletedListComponent, NavbarComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
