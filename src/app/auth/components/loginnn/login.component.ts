import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
  }

  loginIn(event: Event){
    event.preventDefault();
    if (this.formBuilder.form )
  }

}
