import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {
  holidayDates:any[] = [new Date('2024-02-24'), new Date('2024-02-25')]
}
