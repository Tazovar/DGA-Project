import { Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private dateAdapter: DateAdapter<Date>) { }

  dateFilter = (date: Date) => {
    const currentMonth = this.dateAdapter.getMonth(new Date());
    return this.dateAdapter.getMonth(date) === currentMonth;
  };

  areDatesEqual(date1: Date, date2: Date): boolean {
    const _date1 = new Date(date1);
    const _date2 = new Date(date2);

    _date1.setHours(0, 0, 0, 0);
    _date2.setHours(0, 0, 0, 0);

    return _date1.getTime() === _date2.getTime();
  }
}
