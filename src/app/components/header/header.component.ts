import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  
  showFullMenu: boolean = false;
  private routerSub?: Subscription;

  constructor (private router: Router){}

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    if ((event.target as Window).innerWidth > 768) {
      this.showFullMenu = false;
    }
  }

  ngOnInit(): void {
    // Subscribe to navigation events
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showFullMenu = false;
      });
  }

  toggleFullMenu() {
    this.showFullMenu = !this.showFullMenu;
  }
}
