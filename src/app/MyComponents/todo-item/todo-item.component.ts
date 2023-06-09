import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input()
  todo!: Todo; // accepting the todos
  @Input() i!:number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  
  constructor() {}
  ngOnInit(): void {
    
  }

  delete(todo:Todo) {
    this.todoDelete.emit(todo);
    console.log("Delete Button Triggered");
    
  }
  onCheckboxClick(todo: Todo | undefined){
    this.todoCheckBox.emit(todo);
  }
}
