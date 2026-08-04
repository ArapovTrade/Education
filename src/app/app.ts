import { Component, signal , inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('arapov-education');
  private routerSubscription!: Subscription;
  constructor(private router: Router) {}
   ngOnInit(): void {
      this.routerSubscription = this.router.events.subscribe((event) => {
      
        if (event instanceof NavigationEnd) {
          if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
              
          }
        }
      });
    }

    ngOnDestroy() {
    // Отписка от подписок
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
     
  }
}
