import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  title:any = 'registration'
  async register(){
    await this.api.register(this.user.email, this.user.password).subscribe(res => {
      console.log(res)
      console.log(this.user.email, this.user.password)
      this.router.navigate(['/login'])
    }, error=> {
      alert('cannot register')
    })
  }
  
}
