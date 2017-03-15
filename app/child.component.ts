import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'app/child.component.html'
})
export class ChildComponent {

  @Input() private message: string;

  @Output() private outer = new EventEmitter<string>();

  sentToParent(){
    this.outer.emit('msg from child');
  }

}
