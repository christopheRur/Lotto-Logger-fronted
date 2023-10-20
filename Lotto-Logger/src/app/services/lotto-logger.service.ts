import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LottoLoggerService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {

   }

   public retrievePowerBalls():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiServiceUrl}/lotto/power`,{headers});

  }

}
