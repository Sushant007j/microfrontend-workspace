import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService, ProductService, NotificationService, UserService } from 'shared';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  readonly appState = inject(AppStateService);
  private readonly productService = inject(ProductService);
  private readonly notificationService = inject(NotificationService);
  private readonly userService = inject(UserService);

  productCount = 0;
  userCount = 0;
  notifications: Array<{ message: string; type: string }> = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.productCount = products.length));
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
      this.appState.setNotifications(notifications);
    });
    this.userService.getUsers().subscribe((users) => (this.userCount = users.length));
  }
}
