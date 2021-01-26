import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoints } from "src/environments/endpoints";
import { RegisterRequest, RegisterRespose } from "../model/register.model";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<RegisterRespose> {
    return this.http.post<RegisterRespose>(Endpoints.register, data);
  }
}
