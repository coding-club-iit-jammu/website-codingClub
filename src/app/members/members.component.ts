import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  finalArr = [];
  prefinalArr = [];
  totallist = [];
  isAvailable = true;
  lastGet = 0;
  filterVal = '';
  sortBy = '';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
    this.fetchList();
    this.sortBy = 'entry'
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ( this.isAvailable && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(Date.now() - this.lastGet >= 2000){
        this.lastGet = Date.now();
        console.log("scrolled");
        this.updateArr(this.finalArr.length);
      }
    }
  }
  fetchList(){
    this.http.get('https://storageaccountccbot9da5.blob.core.windows.net/codingclub/memberlist.json').pipe().subscribe((data : object)=>{
      for(var ind of Object.keys(data)){
        this.totallist.push(data[ind]);
      }
      this.prefinalArr = this.totallist;
      this.refresh();
    },error =>{
      console.log(error)
    })
  }
  private _filter(value: string, arr : object[] ): object[] {
    const filterValue = value.toLowerCase();
    return arr.filter(option => this._check(option, filterValue));
  }
  private _check(option : object, filterValue : string){
    var a = option['name'].toLowerCase().includes(filterValue);
    var b = option['entry'].toLowerCase().includes(filterValue);
    return a||b
  }
  refresh(){
    this.finalArr = this.prefinalArr.slice(0,7)
    this.isAvailable = true;
  }
  filterVia(){
    var tem : object[];
    if(this.filterVal === null){
      tem = this.totallist;
    }
    else{
      tem = this._filter(this.filterVal, this.totallist);
    }
    tem.sort((a,b) => {
        var k = this.sortBy;
        if ( a[k] < b[k] ){
          if(k == 'rating') return 1
          else return -1
        }
        else if ( a[k] > b[k] ){
          if(k == 'rating') return -1
          else return 1
        }
        else{
          return 0;
        }
    })
    this.prefinalArr = tem;
    this.refresh();
  }

  updateArr(n){
    for(var i=n; i<n+7 && i<this.prefinalArr.length; i++){
      this.finalArr.push(this.prefinalArr[i]);
    }
    if(this.finalArr.length == this.prefinalArr.length) this.isAvailable = false;
  }

}
