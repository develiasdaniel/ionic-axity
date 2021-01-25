import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { 
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(3)]]
    })
  }

  ngOnInit() {
  }

  loginClick(){
    const data = new LoginRequest();
    data.email = this.formLogin.get("email").value;
    data.password = this.formLogin.get("password").value;

    this.loginService.login(data).subscribe(res => {
       console.log(res.token);
       if(res.token){
        this.router.navigate(['home']);
       }else{
         alert('e-mail o contraseña inválidos');
       }
    }, err => {
      console.log("err");
      alert('e-mail o contraseña inválidos');
    });
  }

}
