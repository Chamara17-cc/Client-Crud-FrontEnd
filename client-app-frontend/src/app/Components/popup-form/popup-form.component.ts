import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrl: './popup-form.component.css'
})
export class PopupFormComponent {
  @Output() formClosed = new EventEmitter<void>();
  clientForm: FormGroup;
  isVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  showPopup(): void {
    this.isVisible = true;
  }

  closePopup(): void {
    this.isVisible = false;
    this.formClosed.emit();
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      this.closePopup();
    }
  }
}
