import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCrudComponent } from './book-crud/book-crud.component';
import { BookFormComponent } from './book-form/book-form.component';
import { provideHttpClient } from '@angular/common/http';
import { BookRoutingModule } from './book-routing.module';
import { AppComponent } from '../app.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
@NgModule({
  declarations: [
    BookCrudComponent,
    BookFormComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookCreateComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    TableModule,
    ToastModule,
    RippleModule,
    ButtonModule,
    ImageModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    TagModule,
    DialogModule,
    InputNumberModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class BookModule {}
