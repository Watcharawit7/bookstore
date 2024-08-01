import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCrudComponent } from './book-crud/book-crud.component';
import { BookFormComponent } from './book-form/book-form.component';
import { provideHttpClient } from '@angular/common/http';
import { BookRoutingModule } from './book-routing.module';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    BookCrudComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: [
    provideHttpClient()   
  
  ],
  bootstrap: [AppComponent]

})
export class BookModule { }
