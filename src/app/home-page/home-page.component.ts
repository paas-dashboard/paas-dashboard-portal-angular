import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Middleware {
  name: string;
  route: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  middlewares: Middleware[] = [
    {name: 'pulsar', route: '/pulsar'},
    {name: 'redis', route: '/redis'},
    {name: 'mongo', route: '/mongo'},
    {name: 'kafka', route: '/kafka'},
    {name: 'kubernetes', route: '/kubernetes'},
    {name: 'rocketmq', route: '/rocketmq'},
  ];

  constructor(private router: Router) {}

  chatButtonClick() {
    this.router.navigate(['/chat']);
  }

  goToMiddleware(middleware: Middleware) {
    this.router.navigate([middleware.route]);
  }
}
