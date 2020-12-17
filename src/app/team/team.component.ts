import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  arr = [1,2,3,4];
  team = [
    {
      'name' : 'Abhishek',
      'post' : 'Overall Coordinator',
      'image' : '/assets/team/abhishek.jpeg',
      'linkedin' : 'https://www.linkedin.com/in/abhishek0220/',
      'github' : 'https://github.com/abhishek0220'
    },
    {
      'name' : 'Mamun',
      'post' : 'Senior Member',
      'image' : '/assets/team/mamun.jpg',
      'linkedin' : 'https://www.linkedin.com/in/shaikh-mamun-hoque-37466915b/',
      'github' : 'https://github.com/PositronPiercer'
    },
    {
      'name' : 'Akash',
      'post' : 'Senior Member',
      'image' : '/assets/team/akash.jpg',
      'linkedin' : 'https://www.linkedin.com/mwlite/in/akash-kumar-194800174',
      'github' : ''
    },
    {
      'name' : 'Harsh',
      'post' : 'Senior Member',
      'image' : '/assets/team/defualt.jpg',
      'linkedin' : '',
      'github' : ''
    },
    {
      'name' : 'Samarth',
      'post' : 'Department Head AI/ML',
      'image' : '/assets/team/Samarth.JPG',
      'linkedin' : 'https://www.linkedin.com/in/samarth-singh-3b993916b/',
      'github' : 'https://github.com/sam6134'
    },
    {
      'name' : 'Daksh',
      'post' : 'Department Head Competitive Coding',
      'image' : '/assets/team/Daksh.jpg',
      'linkedin' : 'https://www.linkedin.com/in/daksh-chauhan-a541571b3/',
      'github' : 'http://github.com/dak-x'
    },
    {
      'name' : 'Mayank',
      'post' : 'Department Head Development ',
      'image' : '/assets/team/Mayank.jpg',
      'linkedin' : 'https://www.linkedin.com/in/mayank-singhal-a8520316b/',
      'github' : 'https://github.com/tech-mayank'
    },
    {
      'name' : 'Sachin',
      'post' : 'Event Management Head',
      'image' : '/assets/team/defualt.jpg',
      'linkedin' : 'https://www.linkedin.com/in/sachin-kumar-a10252b0/',
      'github' : 'https://github.com/Sachindrck'
    },
    {
      'name' : 'Purnaabh',
      'post' : 'Social Media Head',
      'image' : '/assets/team/Purnaabh.jpg',
      'linkedin' : 'https://www.linkedin.com/in/purnaabh-shandilya-b9b365170/',
      'github' : ''
    },
    {
      'name' : 'Shivam',
      'post' : 'Competitive Coding Department Co-Head ',
      'image' : '/assets/team/Shivam.jpg',
      'linkedin' : 'https://www.linkedin.com/in/shivam-sharma-7b1026198/',
      'github' : 'https://github.com/shivamsh-iitja'
    },
    {
      'name' : 'Parwaan',
      'post' : 'Web and App Development Department Co-Head',
      'image' : '/assets/team/Parwaan.jpg',
      'linkedin' : 'https://www.linkedin.com/in/parwaan-virk-783a801b2/',
      'github' : 'https://github.com/parwaanvirk'
    },
    {
      'name' : 'Bhavyta',
      'post' : 'Event Management Co-Head ',
      'image' : '/assets/team/bhavyta.jpg',
      'linkedin' : 'https://www.linkedin.com/in/bhavyta-aggarwal-466a791a7',
      'github' : 'https://github.com/bhavytaggarwal'
    },
    {
      'name' : 'Jayesh',
      'post' : 'Event Management Co-Head',
      'image' : '/assets/team/defualt.jpg',
      'linkedin' : '',
      'github' : ''
    },
    {
      'name' : 'Ayushi',
      'post' : 'Core Team',
      'image' : '/assets/team/defualt.jpg',
      'linkedin' : '',
      'github' : ''
    },
    {
      'name' : 'Unnam',
      'post' : 'Core Team',
      'image' : '/assets/team/Unnam.jpeg',
      'linkedin' : 'https://www.linkedin.com/in/unnam-pearly-susan-8a16b416b',
      'github' : ''
    },
    {
      'name' : 'Aanjaney',
      'post' : 'Core Team',
      'image' : '/assets/team/aanjaney.jpg',
      'linkedin' : 'https://www.linkedin.com/in/aanjaney-kumar-verma-54b374191',
      'github' : 'https://github.com/Akuver'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
