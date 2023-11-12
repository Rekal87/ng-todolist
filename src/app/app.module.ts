import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoFormComponent } from './component/to-do-form/to-do-form.component';
import { ToDoComponent } from './component/to-do/to-do.component';
import { ToDoItemComponent } from './component/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    ToDoComponent,
    ToDoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
