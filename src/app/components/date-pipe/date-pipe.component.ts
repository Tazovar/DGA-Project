import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DatePipeComponent {
  someDate:string = "2023-08-10T09:42:34.0734574Z";
  someNonDateValue:string = "sd"
}
