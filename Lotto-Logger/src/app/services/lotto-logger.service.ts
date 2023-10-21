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
/**
 *Retrieve powerballs generated from backend
 * @returns
 */
   public retrievePowerBalls():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiServiceUrl}/lotto/power`,{headers});

  }
  /**
   * Retrieve megaballs from backend
   */
  public retrieveMegaBalls():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiServiceUrl}/lotto/mega`,{headers});

  }
/**
   * Retrieve Gold megaballs from backend
   */
  public retrieveGoldMegaBall():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiServiceUrl}/lotto/gold`,{headers});

  }

  /**
   * Retrieve red powerballs from backend
   */
  public retrieveRedPowerBall():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiServiceUrl}/lotto/red`,{headers});

  }

   /**
   * Retrieve Megaplays from backend
   */
   public retrieveMegaPlaysBall():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiServiceUrl}/lotto/mega-plays`,{headers});

  }
    /**
   * Retrieve Megaplays from backend
   */
    public retrievePowerPlaysBall():Observable<any>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this.http.get<any>(`${this.apiServiceUrl}/lotto/power-plays`,{headers});

    }

}
