import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
startDate: Date = new Date();
// endDate: Date = new Date();
  constructor(public navCtrl: NavController,private calendar: Calendar) {
this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);
  }

  createEvent(){

  	this.calendar.createEvent("Demo Ionic Event", "Gandhinagar", "This is a demo event", this.startDate, this.startDate)

  }
}
