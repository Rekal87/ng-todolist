import {
  Component,
  HostBinding,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { TodoListItem } from '../todolistitem';
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {
  tlService = inject(TodolistService);
  @Input() item!: TodoListItem;
  @HostBinding('style.order')
  get order() {
    return this.item.done ? '1' : '0';
  }
  @HostListener('click')
  itemClecik() {
    this.tlService.tlArray.set([
      ...this.tlService.tlArray().map((item) => {
        if (item.id === this.item.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      }),
    ]);
  }
}
