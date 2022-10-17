import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }

}
