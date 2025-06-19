import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface NotificationData {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private notificationSubject = new Subject<NotificationData>();

    constructor() { }

    // Observable que os componentes podem inscrever para receber notificações
    get notifications$(): Observable<NotificationData> {
        return this.notificationSubject.asObservable();
    }

    // Método para enviar uma notificação de sucesso
    success(message: string, duration: number = 5000): void {
        this.notify({ message, type: 'success', duration });
    }

    // Método para enviar uma notificação de erro
    error(message: string, duration: number = 5000): void {
        this.notify({ message, type: 'error', duration });
    }

    // Método para enviar uma notificação informativa
    info(message: string, duration: number = 5000): void {
        this.notify({ message, type: 'info', duration });
    }

    // Método para enviar uma notificação de aviso
    warning(message: string, duration: number = 5000): void {
        this.notify({ message, type: 'warning', duration });
    }

    // Método interno para enviar a notificação
    private notify(notification: NotificationData): void {
        this.notificationSubject.next(notification);
    }
}
