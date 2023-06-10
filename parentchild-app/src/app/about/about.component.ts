import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output()
  public senddData = new EventEmitter<string>();
  
  ngOnInit(){
    //this.senddData.emit('This is Child Data');
  }

  showtext(){
    this.senddData.emit('This is Child Data');
  }

  
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  notifyParent() {
    this.notify.emit('Hello from child');
  }


}
