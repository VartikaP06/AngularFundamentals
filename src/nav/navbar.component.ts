import { Component } from '@angular/core';
import { AuthService } from 'src/user/auth.service';
import { ISession, EventService } from 'src/app/events';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(private authService: AuthService,
              private eventService: EventService) {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => { this.foundSessions = sessions;
      });
  }
}
