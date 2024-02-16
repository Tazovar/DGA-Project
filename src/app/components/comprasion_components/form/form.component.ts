
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newArrayElement: string = '';
  value!:string
  @Output() addElement:EventEmitter<string> = new EventEmitter<string>();
  @Output() sendValue:EventEmitter<string> = new EventEmitter<string>();

  writing(){
    this.sendValue.emit(this.value)
  }
  addElementInArray(): void {
    if (this.newArrayElement.trim() !== '') {
      this.addElement.emit(this.newArrayElement);
      this.newArrayElement = '';
    }
  }
}
