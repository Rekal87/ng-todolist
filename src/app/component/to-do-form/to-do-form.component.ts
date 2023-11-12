import { Component, inject } from '@angular/core';
import { TodolistService } from 'src/app/todolist.service';
import { TodoListItem } from '../todolistitem';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css'],
})
export class ToDoFormComponent {
  tlService = inject(TodolistService);
  addNewItem(text: string, e: SubmitEvent) {
    e.preventDefault();

    const newItem: TodoListItem = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };
    console.log({ newItem });
    this.tlService.tlArray.set([newItem, ...this.tlService.tlArray()]);
    const target = e.target as HTMLFormElement;
    target.reset();
  }
}
