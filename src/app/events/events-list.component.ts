
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let ev of events" class="col-md-5">
        <event-thumbnail [event] = "ev" (click)="handleThumbnailClick(ev.name)"></event-thumbnail>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventsListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
