import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  {
    path:"todo-lists",
    component:TodoItemComponent,
    pathMatch:"full"

  },
  {
    path:"add-todo",
    component:AddTodoComponent,
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:TodosComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
