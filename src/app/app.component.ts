import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isClicked: boolean;
  length: number;
  generatedPassword: string;
  enableCapLetters: boolean;
  enableLetters: boolean;
  enableNumbers: boolean;
  enableSymbols: boolean;
  optionSelected: boolean;
  viewPassword: boolean;
  constructor() {
    this.length = 0;
    this.generatedPassword = '';
    this.enableLetters = false;
    this.enableNumbers = false;
    this.enableSymbols = false;
    this.enableCapLetters = false;
    this.optionSelected = false;
    this.isClicked = false;
    this.viewPassword = false;
  }
  onSubmit(input: HTMLInputElement) {
    this.length = +input.value;
    console.log(this.length);
  }
  onChange(e: any) {
    if (e.target.id === 'capLetters')
      this.enableCapLetters = !this.enableCapLetters;
    if (e.target.id === 'letters') this.enableLetters = !this.enableLetters;
    if (e.target.id === 'numbers') this.enableNumbers = !this.enableNumbers;
    if (e.target.id === 'symbols') this.enableSymbols = !this.enableSymbols;
    this.optionSelected =
      this.enableCapLetters ||
      this.enableLetters ||
      this.enableNumbers ||
      this.enableSymbols;
  }
  generatePassword(e: any) {
    e.preventDefault();
    this.isClicked = true;
    this.viewPassword =
      this.length >= 1 && this.isClicked && this.optionSelected;
    console.log(this.isClicked);
    let capLetters = this.enableCapLetters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    let letters = this.enableLetters ? 'abcdefghijklmnopqrstuvwxyz' : '';
    let numbers = this.enableNumbers ? '1234567890' : '';
    let symbols = this.enableSymbols ? '!@#$%^&*()_+{}?><' : '';
    let tempPassword = '' + letters + numbers + symbols + capLetters;

    this.generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let randomIndex = Math.round(Math.random() * tempPassword.length);
      this.generatedPassword += tempPassword[randomIndex];
    }
    console.log(this.generatedPassword);
    this.isClicked = false;
  }

  errorMessage() {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 5000);
  }

  copyPassword(e: any) {
    let value = e;
    value.select();
    document.execCommand('copy');
  }
}
