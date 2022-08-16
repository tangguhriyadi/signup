import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes:Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }
    ]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/admin/home'
  }
  
] 

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
