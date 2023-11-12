import { Component, Signal, computed, inject } from '@angular/core';
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  tlService = inject(TodolistService);
  todolistArray = this.tlService.tlArray;
  finishedCount!: Signal<number>;

  ngOnInit() {
    this.finishedCount = computed(() => {
      return this.todolistArray().filter((item) => !!item.done).length;
    });
  }
}
