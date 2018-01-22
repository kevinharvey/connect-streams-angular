import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

declare const connect: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    let container = document.getElementById('connectContainer');
    var ccpUrl = "https://development-axialhealthcare.awsapps.com/connect/ccp";
    connect.core.initCCP(container, {
        ccpUrl: ccpUrl,        
        loginPopup: true,         
        softphone: {
            allowFramedSoftphone: true
        }
    });
    connect.agent((agent) => this.subscribeToAgentEvents(agent));
  }
  
  subscribeToAgentEvents(agent) {
    console.group('subscribeToAgentEvents');
    console.log(agent.getName());
    agent.onRefresh(this.handleAgentRefresh);
    console.groupEnd
  }

  handleAgentRefresh(agent) {
    console.group('handleAgentRefresh');
    console.log(agent.getName());
    console.groupEnd();
  }

}
