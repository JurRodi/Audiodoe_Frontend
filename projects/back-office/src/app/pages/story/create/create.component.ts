import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  public storyForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    thumbnail: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  public submitForm(): void {
    this.router.navigate(['story/create-pages']);
  }
}
