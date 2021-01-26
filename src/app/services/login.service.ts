import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoints } from "src/environments/endpoints";
import { LoginRequest, LoginRespose } from "../model/login.model";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginRespose> {
    return this.http.post<LoginRespose>(Endpoints.login, data);
  }
}
