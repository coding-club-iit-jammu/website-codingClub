import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wps2020',
  templateUrl: './wps2020.component.html',
  styleUrls: ['./wps2020.component.css']
})
export class Wps2020Component implements OnInit {
  event_description = "Improve your problem solving, data structures and algorithmic skills by practicing a set of weekly problems"
  event_description_full = "This program is specially for 1st year students to improve their programming skills. We will be giving you some problems to solve over the entire week. But, you will be expected to make daily progess in the problems. The problems will help you enhance your data structures knowledge and you will also be able to see a significant progess in your ranks in Coding Competitions if you solve most of the problems provided."
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.openDialog();
  }
  openDialogWithLink(linkGot : string) {
    const dialogRef = this.dialog.open(DialogContent, {
      data: {
        link: linkGot
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog(){
    var linkgot = "https://docs.google.com/forms/d/e/1FAIpQLSef2S941qhxyo3kS9Cr2UdIhORQhw0s-Nb36Om3BcWTiVYjtw/viewform?embedded=true";
    this.openDialogWithLink(linkgot)
  }
  openDialogMentor(){
    var linkgot = "https://docs.google.com/forms/d/e/1FAIpQLSe3zjG2bi_T0vzJXw3ZZAd2ivIz-8IWk9YsNRTc0d1kwxb_hA/viewform?embedded=true";
    this.openDialogWithLink(linkgot)
  }
}
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
  styleUrls: ['dialog-content.css']
})
export class DialogContent {
  url : SafeResourceUrl;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: object,
    sanitizer: DomSanitizer
  )
  {
    this.url = sanitizer.bypassSecurityTrustResourceUrl(data['link']);
  }
}
