import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Position } from './Position'

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private positionsUrl: string;
  // private positionsSaveUrl: string;

  constructor(private http: HttpClient) {
    this.positionsUrl = 'http://localhost:8080/rest/v1/positions';
    // this.positionsSaveUrl = 'http://localhost:8080/rest/v1/users';
   }

  public retrieveAllPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.positionsUrl);
  }

  public savePosition(position: Position) {
    return this.http.post<Position>(this.positionsUrl, position);
  }
}
