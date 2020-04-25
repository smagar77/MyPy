import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  token:any = ''
  login(username, password):Observable<any>{
    var data:any = {
      "username":username.value,
      "password":password.value
    }
    header('Access-Control-Allow-Origin: *');
    this.token = this.http.post('http://127.0.0.1:5000/login/', JSON.stringify(data));
    this.token.subscribe(login_response => this.token = login_response)
    console.log(this.token)
  }

}
