import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {
  constructor() { }

  calculateSimilarityPercentage(value1: string, value2: string[]): number {
    if (!value1 || !value2 || value2.length === 0) {
      return 0;
    }
  
    let maxPercentage = 0;
  
    value2.forEach(val => {
      const percentage = this.calculatePartialSimilarityPercentage(value1.toLowerCase(), val.toLowerCase()).toFixed(2);
      maxPercentage = Math.max(maxPercentage, parseFloat(percentage));
    });
  
    return maxPercentage;
  }
  
  private calculatePartialSimilarityPercentage(value1: string, value2: string): number {
    let maxMatchingCharacters = 0;
  
    for (let i = 0; i < value2.length; i++) {
      for (let j = 0; j < value1.length; j++) {
        let matchingCharacters = 0;
        let k = i;
        let l = j;
  
        while (k < value2.length && l < value1.length && value2[k] === value1[l]) {
          matchingCharacters++;
          k++;
          l++;
        }
  
        maxMatchingCharacters = Math.max(maxMatchingCharacters, matchingCharacters);
      }
    }
  
    return (maxMatchingCharacters / Math.max(value1.length, value2.length)) * 100;
  }
}
