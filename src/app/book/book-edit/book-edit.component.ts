import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookFormService } from '../book-form.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent implements OnInit {
  bookId!: number;
  bookForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private bookFormService: BookFormService
  ) {
    this.bookForm = this.bookFormService.toFormGroup();
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.params['id'];
    this.bookService.load(this.bookId).subscribe({
      next: (book) => {
        this.bookForm.patchValue(book);
      },
    });
  }

  onSubmit() {
    this.bookService.update(this.bookId, this.bookForm.value).subscribe({
      next: (result) => {
        alert('edit id: ' + this.bookId + ' ' + JSON.stringify(result));
        this.router.navigate(['/book/detail', result.id]);
      },
    });
  }

  deleteBook() {
    this.bookService.delete(this.bookId).subscribe({
      next: (result) => {
        alert(`delete book id ${result.id} success !!`);
        this.router.navigate(['/book']);
      },
    });
  }
}
