import { Injectable, signal } from '@angular/core';
import { DUMMY_TODOLIST_ARR } from './dummy-data';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  tlArray = signal(DUMMY_TODOLIST_ARR);
  constructor() {}
}
