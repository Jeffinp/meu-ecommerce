import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-modal.html',
  styleUrl: './notification-modal.scss'
})
export class NotificationModalComponent {
  show = true;

  fechar() {
    this.show = false;
  }
}
