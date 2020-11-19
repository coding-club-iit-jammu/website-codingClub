import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = "Welcome to the Coding Club IIT Jammu";
  about_text = "Coding Club IIT Jammu is a group of passionate coders aimed at the overall development of coding culture in the college by introducing basic coding concepts to students who are new to the programming world and rendering a collaborative environment to the coders of the college along with providing technical assistance like websites, apps etc in college fests and other clubs. The club aims at introducing a diversity of inclinations in coding to the students so that they can pursue what interests them. We regularly hold sessions on various topics such as Machine learning, Competitive Coding, Web Development, App Development, Security and Open Source. ";
  welcomeText = "";
  i = 0;
  constructor() { }

  ngOnInit(){
    //this.welcomeText = this.text;
    this.typeWriter();
  }
  typeWriter() {
    console.log("ii")
    if (this.i < this.text.length) {
      this.welcomeText += this.text[this.i];
      console.log(this.welcomeText)
      this.i++;
      setTimeout(this.typeWriter.bind(this), 200);
    }
  }

}
