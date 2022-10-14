import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { LoginForm } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
  email: '',
  password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit () {
    console.log(this.form)
  }

}
