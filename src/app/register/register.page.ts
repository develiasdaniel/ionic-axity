import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterRequest } from "../model/register.model";
import { RegisterService } from "../services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.formRegister = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(3)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(3)]],
      },
      { validator: this.matchingPasswords("password", "confirmPassword") }
    );
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true,
        };
      }
    };
  }

  registerClick() {
    const data = new RegisterRequest();
    data.email = this.formRegister.get("email").value;
    data.password = this.formRegister.get("password").value;

    this.registerService.register(data).subscribe(
      (res) => {
        if (res.token) {
          this.router.navigate(["home"]);
        } else {
          alert("Intente de nuevo");
        }
      },
      (err) => {
        alert(err.error.error);
      }
    );
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }

  ngOnInit() {}
}
