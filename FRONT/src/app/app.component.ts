import { Component, AfterViewInit } from '@angular/core';
declare var navigator: any;
declare var Connection: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor(){

  }
ngAfterViewInit(){
  this.receivedEvent('deviceready')
  this.checkConnection();
}
checkConnection() {
  var networkState = navigator.connection.type;

  
  alert('Connection type: ' + networkState);
}


receivedEvent(id){
  var parentElement = document.getElementById(id);
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');

  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');

  console.log('Received Event: ' + id);
}
}
