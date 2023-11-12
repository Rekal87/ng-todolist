import { Injectable, effect, signal } from '@angular/core';
import { DUMMY_TODOLIST_ARR } from './dummy-data';
import { TodoListItem } from './component/todolistitem';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  tlArray: SettableSignal<TodoListItem[]>;
  lsSaver = effect(() => {
    localStorage.setItem('ng-todolist', JSON.stringify(this.tlArray()));
  });
  constructor() {
    const itemsFromStorage = this.getItemsFromStorage();
    this.tlArray = signal(itemsFromStorage);
  }

  getItemsFromStorage() {
    const itemsStr = localStorage.getItem('ng-todolist');
    return itemsStr ? JSON.parse(itemsStr) : DUMMY_TODOLIST_ARR;
  }
}
