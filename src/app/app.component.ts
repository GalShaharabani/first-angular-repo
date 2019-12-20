import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date:Date;

  ngOnInit(): void {
  this.date=new Date();   

  }
  title = 'FirstAngularSite';
  id='';
  firstName ='';
  lastName='';

 public popup() {
     alert("ID= "+this.id+", First name= "+this.firstName+", Last name= "+this.lastName);
  }

}


