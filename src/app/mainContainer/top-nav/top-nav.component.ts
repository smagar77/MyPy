import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login_status:boolean = true
  login_url:string = "#login"
  logout_url:string = "#logout"
}
