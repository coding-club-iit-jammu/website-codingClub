import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventList = []

  constructor(private http: HttpClient) {


   }

  ngOnInit(): void {
    this.fetchEvents()
  }

  fetchEvents() {
     this.http.get('https://raw.githubusercontent.com/ashutoshc8101/coding-club-iit-jammu.github.io/EventDataIntoFile/src/app/events/events.json').pipe().subscribe((data : object)=>{

      for(var ind of Object.keys(data)){
        data[ind].forEach((ev) => {
          this.eventList.push(ev)
        })
        console.log(this.eventList)
      }

    },error =>{
      console.log(error)
    })
  }

}
