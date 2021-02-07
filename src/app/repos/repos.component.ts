import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos = []

  isAvailable: boolean = false

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {

    this.http.get('https://api.github.com/users/coding-club-iit-jammu/repos')
      .pipe().subscribe((data: Array<Object>)=> {
        for(let i=0; i < data.length; i++) {
            this.repos.push(data[i])
        }
        this.isAvailable = true
      })

  }

}
