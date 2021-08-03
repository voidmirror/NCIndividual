import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Position } from './Position'

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private positionsUrl: string;
  private positionsUrl3: string;
  // private positionsSaveUrl: string;

  constructor(private http: HttpClient) {
    this.positionsUrl = 'https://localhost:8443/rest/v1/positions';
    this.positionsUrl3 = 'https://localhost:8443/rest/v1/positions/3';
    // this.positionsSaveUrl = 'http://localhost:8080/rest/v1/users';
   }

  public retrieveAllPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.positionsUrl);
  }

  public getPositionById(id: number): Observable<Position> {
    return this.http.get<Position>(this.positionsUrl + '/' + id)
  }

  public savePosition(position: Position) {
    console.log('save function', position)
    return this.http.post<Position>(this.positionsUrl, position);
  }

  public deletePosition(position: Position) {
    console.log('delete function', position);
    console.log(this.positionsUrl);
    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: position
    }
    return this.http.post<Position>(this.positionsUrl + '/delete', position).subscribe();
    // return this.http.delete<Position>(this.positionsUrl, options);
  }
}
