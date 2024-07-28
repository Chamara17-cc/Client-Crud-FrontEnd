import { Component, ViewChild, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { ClientService, Client } from '../../Services/client.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit, OnChanges {
  @ViewChild('popupForm') popupForm!: UpdateFormComponent;
  @Input() clientId!: number;

  client: Client | undefined;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClientDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['clientId'] && changes['clientId'].currentValue !== undefined) {
      this.fetchClientDetails();
    }
  }

  fetchClientDetails(): void {
    if (this.clientId !== undefined) {
      this.clientService.getClients().subscribe(
        (clients: Client[]) => {
          this.client = clients.find(c => c.id === this.clientId);
          console.log("Fetched client details for ID:", this.clientId);
        },
        (error) => {
          console.error('Error fetching client details', error);
        }
      );
    }
  }

  showPopup(): void {
    this.popupForm.showPopup();
  }

  onFormClosed(): void {
    console.log('Popup form closed');
  }
}
