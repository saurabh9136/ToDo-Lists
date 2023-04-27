import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  implements OnInit{

  localItem:string | null;

  // now creating array of todos to store them 
  todos!: Todo[];  // created array of todos
  constructor() {
    this.localItem = localStorage.getItem("todos"); 
    if(this.localItem == null){
      
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
    
  }
  deleteTodo(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos)); // saving the todos in users local stroage
  }

  addTodo(todo:Todo) {
    console.log(todo);   
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos)); // saving the todos in users local stroage
  }

  toggleTodo(todo:Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos)); // saving the todos in users local stroage
  }


}
