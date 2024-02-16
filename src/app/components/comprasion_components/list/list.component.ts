
import { Component, Input } from '@angular/core';
import { ComparisonService } from 'src/app/services/comparsion.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() value1!: string;
  @Input() value2!: string[];

  constructor(public comparisonService: ComparisonService) {}

  calculateMatchingPercentage(val: string): number {
    return this.comparisonService.calculateSimilarityPercentage(this.value1, [val]);
  }
}
