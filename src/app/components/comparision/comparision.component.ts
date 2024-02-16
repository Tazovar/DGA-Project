import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComparisonService } from 'src/app/services/comparsion.service';
 
@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparisionComponent {
  value1: string = '';
  value2: string[] = ['tazo', 'giorgi'];
  matchingPercentage: number = 0;

  constructor(public comparisonService: ComparisonService) {}

  onInputChange(): void {
    this.matchingPercentage = this.calculateMatchingPercentage();
  }

  calculateMatchingPercentage(): number {
    return this.comparisonService.calculateSimilarityPercentage(this.value1, this.value2);
  }

  addElementInArray(newArrayElement: string): void {
    this.value2.push(newArrayElement);
  }

  sendValueSubscriber(event:string){
    this.value1 = event
    this.value1 = this.value1.replaceAll(' ' , '')
  }
}
