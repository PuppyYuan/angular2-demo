import { Component, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

  private greeting: string;
  private isShowMore: boolean;
  private msg2Child: string;
  private msgFromChild: string;

  constructor(private logger: LoggerService){}

  ngOnInit(){
    this.greeting = 'angular 2';
    this.msg2Child = 'msg from parent';
    this.logger.debug('根组件已经初始化完毕');
  }

  receive(msg: string){
    this.msgFromChild = msg;
  }
}
