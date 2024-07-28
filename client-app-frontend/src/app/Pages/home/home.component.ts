import { Component, ViewChild } from '@angular/core';
import { PopupFormComponent } from '../../Components/popup-form/popup-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('popupForm') popupForm!: PopupFormComponent;

  showPopup(): void {
    this.popupForm.showPopup();
  }

  onFormClosed(): void {
    console.log('Popup form closed');
  }
  selectedClientId: number | undefined;

  onClientSelected(clientId: number): void {
    this.selectedClientId = clientId;
    console.log('Client selected:', clientId);
  }
}
