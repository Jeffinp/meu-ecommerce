import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { LucideAngularModule, CheckCircle, XCircle, Info, AlertCircle, X } from 'lucide-angular';
import { NotificationService } from '../../services/notification.service';

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

@Component({
  selector: 'app-notification-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './notification-modal.html',
  styleUrl: './notification-modal.scss',
  animations: [
    trigger('notificationAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class NotificationModalComponent implements OnInit, OnDestroy {
  private _notifications = new BehaviorSubject<Notification[]>([]);
  notifications$ = this._notifications.asObservable();

  private subscriptions: Subscription[] = [];
  private currentId = 0;

  // Ícones
  readonly CheckCircle = CheckCircle;
  readonly XCircle = XCircle;
  readonly Info = Info;
  readonly AlertCircle = AlertCircle;
  readonly X = X;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    // Inscrever-se no serviço de notificações
    this.subscriptions.push(
      this.notificationService.notifications$.subscribe(notification => {
        this.addNotification(notification.message, notification.type, notification.duration);
      })
    );

    // Mostrar uma notificação de boas-vindas na inicialização
    setTimeout(() => {
      this.showWelcomeNotification();
    }, 1000);
  }

  // Método para adicionar uma notificação
  addNotification(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', duration: number = 5000): string {
    const id = `notification-${this.currentId++}`;
    const notification: Notification = { id, message, type, duration };

    const currentNotifications = this._notifications.getValue();
    this._notifications.next([...currentNotifications, notification]);

    // Configurar um timer para remover a notificação após a duração especificada
    if (duration > 0) {
      this.subscriptions.push(
        timer(duration).subscribe(() => {
          this.removeNotification(id);
        })
      );
    }

    return id;
  }

  // Método para remover uma notificação específica
  removeNotification(id: string): void {
    const currentNotifications = this._notifications.getValue();
    this._notifications.next(currentNotifications.filter(n => n.id !== id));
  }

  // Método para limpar todas as notificações
  clearAllNotifications(): void {
    this._notifications.next([]);
  }

  ngOnDestroy(): void {
    // Limpar todas as inscrições ao destruir o componente
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Demo de projeto em desenvolvimento
  showWelcomeNotification(): void {
    const welcomeMessage = "Bem-vindo ao MeuShop! Este projeto está em desenvolvimento. Explore à vontade e envie seu feedback!";
    this.addNotification(welcomeMessage, 'info', 10000);
  }
}
