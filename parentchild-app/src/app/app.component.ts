import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild-app';
  enterName = "Haleema";
  enterMyname = "Ash";
  parentData = "";
  secondParentData = "";

  transferData(){
    this.parentData = this.enterName;
  }


  sendData(){

    this.secondParentData = this.enterMyname;

  }

  value="";
  senddData(value: string){
    this.value = value;
  }

  onChildEvent(message: string) {
    console.log(`Received event from child: ${message}`);
  }

}
