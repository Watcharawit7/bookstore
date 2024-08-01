import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from './book/book.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    BookModule,
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
