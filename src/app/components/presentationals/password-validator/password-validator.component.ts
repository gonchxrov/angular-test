import { Component } from '@angular/core';

@Component({
  selector: 'password-validator',
  templateUrl: './password-validator.component.html',
  styleUrl: './password-validator.component.scss'
})
export class PasswordValidatorComponent {
  protected password: string = '';
  protected strength: number = 0;

  protected calculateStrength(): void {
    const hasLetters = /[a-zA-Z]/.test(this.password) ? 1 : 0;
    const hasDigits = /\d/.test(this.password) ? 1 : 0;
    const hasSymbols = /[^a-zA-Z0-9]/.test(this.password) ? 1 : 0;

    this.strength = hasLetters + hasDigits + hasSymbols;
  }

  protected passwordStrengthColor(section: number): string {
    if (this.password.length >= 8) {
      switch (this.strength) {
        case 0:
          return 'red'; // Weak password
        case 1:
          return section === 1 ? 'red' : 'gray'; // Easy password
        case 2:
          return section === 1 || section === 2 ? 'yellow' : 'gray'; // Medium password
        default:
          return 'green'; // Strong password
      }
    }

    return this.password.length ? 'red' : 'gray'
  }

}
