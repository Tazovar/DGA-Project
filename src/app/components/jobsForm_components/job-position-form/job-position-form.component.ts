import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-position-form',
  templateUrl: './job-position-form.component.html',
  styleUrls: ['./job-position-form.component.css']
})
export class JobPositionFormComponent implements OnInit {
  @Input() parentForm!: FormGroup | any; 
  @Output() remove: EventEmitter<number> = new EventEmitter(); 

  constructor() {}

  ngOnInit(): void {}


  removePosition() {    
    this.remove.emit();
  }
}
