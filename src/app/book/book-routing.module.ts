import { NgModule } from '@angular/core';
import { BookCrudComponent } from './book-crud/book-crud.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'book', component: BookCrudComponent}

];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BookRoutingModule { }
