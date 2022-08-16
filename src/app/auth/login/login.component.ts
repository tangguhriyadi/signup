import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exform:any
  constructor(
    public api:ApiService,
    public router:Router
  ){}
  
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
    this.api.login(this.user.email, this.user.password).subscribe(res => {
      /* localStorage.setItem('appToken', JSON.stringify(res)); */
      console.log(res)
      /* this.router.navigate(['admin/home']) */
    }, err=>{
      alert('tidak dapat login')
    })
  }
}
