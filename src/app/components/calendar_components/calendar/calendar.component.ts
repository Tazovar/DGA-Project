import { Component, Input } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService] 
})
export class CalendarComponent {
  @Input() holiday!: any[];

  constructor(private calendarService: CalendarService) { }

  dateFilter = this.calendarService.dateFilter;

  dateClass = (date: Date) => {
    const isHoliday = this.holiday.some(holidayDate =>
      this.calendarService.areDatesEqual(holidayDate, date)
    );
    return isHoliday ? 'custom-holiday' : '';
  };
}
