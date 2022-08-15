import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exform:any
  constructor(){}
  
  ngOnInit(): void {
    this.exform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'repassword':new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
    
  }


  user:any = {}
  title:any = 'please login'
  login(){
    console.log(this.user)
  }
}
