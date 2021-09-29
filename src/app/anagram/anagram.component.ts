import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {

  anagramForm: FormGroup;
  isSubmitted: boolean= false;

  constructor(
    private _fb: FormBuilder
  ) {
    this.anagramForm = this._fb.group({
      firstword: ["", [Validators.required]],
      secondword: ["", [Validators.required]]
    });

    this.anagramForm.valueChanges.subscribe((data) => {
      this.isSubmitted = false;
    })
  }

  checkAnagramWords() {
    this.isSubmitted = true;
    if (this.anagramForm.valid) {
      if (this.is_anagram(this.anagramForm.controls['firstword'].value, this.anagramForm.controls['secondword'].value)) {
        alert('Anagram.');
      }else {
        alert('Its not Anagram.');
      }
    }
  }

  is_anagram (w1: string, w2: string) {
    let w_1 = w1.toLowerCase().split("").sort().join("");
    let w_2 = w2.toLowerCase().split("").sort().join("");

    if (w_1 == w_2) {
      return true;
    }else {
      return false;
    }
  }
}
