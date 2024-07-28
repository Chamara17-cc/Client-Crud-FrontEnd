import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Client, ClientService } from '../../Services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panal',
  templateUrl: './side-panal.component.html',
  styleUrls: ['./side-panal.component.css']
})
export class SidePanalComponent implements OnInit {
  clients: Client[] = [];
  isLoading: boolean = true;
  selectedClientId: number | null = null; // Track selected client

  @Output() clientSelected = new EventEmitter<number>();

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching clients', error);
        this.isLoading = false;
      }
    );
  }

  selectClient(clientId: number): void {
    this.selectedClientId = clientId; // Set the selected client
    this.clientSelected.emit(clientId);
    this.router.navigate(['/Home/details', clientId]);
  }
}
