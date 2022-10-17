import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { LoginForm } from '../auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
