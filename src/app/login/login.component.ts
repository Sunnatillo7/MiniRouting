import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  private router = new Router()

  layoutService = inject(LayoutService)

  userData = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl('')
  })

  login(): void {
    console.log(this.userData.value);

    if(this.userData.value.email !== '' && this.userData.value.fullName !== '' && this.userData.value.email === 'askaraliyevsunnatillo@gmail.com'
    && this.userData.value.fullName === 'Sunnatillo'
    ){
      this.router.navigate(['home'])
      this.layoutService.flexLayout.next(true)
    }else{
      alert('Invalid params Please check params and try again !')
    }
    
  }
  

}
