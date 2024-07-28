import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  @Output() formClosed = new EventEmitter<void>();
  clientUpdateForm: FormGroup;
  isVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.clientUpdateForm = this.fb.group({
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
    if (this.clientUpdateForm.valid) {
      console.log(this.clientUpdateForm.value);
      this.closePopup();
    }
  }
}
