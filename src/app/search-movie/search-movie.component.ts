import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';
import { isRequiredValidator } from '../loginValue.validation';
import { rangeDateValidator } from '../min-date.validator';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  isSubmit : boolean = false;
  
  minimumDate : Date = new Date('1900-01-01')
  // Declare all controls with validation rules
  shearchMovie = this.fb.group({
    login: this.fb.group(
      {
        identifiant: ['', Validators.required],
        title: ['', Validators.required],
      },
      { validator: isRequiredValidator }
    ),
    date: ['', rangeDateValidator(this.minimumDate, new Date())],
    fiche: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // get Observable from FormGroup
    this.shearchMovie.valueChanges
      // listen to value change
      .subscribe((value) => {
        console.log('shearchMovie value changes : ', value);
      });
    this.shearchMovie.patchValue({ fiche: 'courte' });
  }

  onSubmit() {
    this.isSubmit = true;
    console.log(this.shearchMovie.value);
  }
}
