import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list = ['BUILD APPS', 'LOVE TO DEVELOP NEW THINGS', "LOVE TO MAKE THINGS FUN"];
  constructor() { }

  ngOnInit(): void {
  }

}
