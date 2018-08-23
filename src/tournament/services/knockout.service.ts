import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Knockout } from '../classes/knockout';

@Injectable({
  providedIn: 'root'
})
export class KnockoutService {
  baseUrl: string = '/Restapi/v1/Knockouts';

  knockouts: Knockout[];

  constructor(private http: HttpClient) { }

  getAllKnockOutsByTournamentIdAndUserId(tournamentId: number, userId: number): Observable<Knockout[]> {
    return this.http.get<Knockout[]>(`${this.baseUrl}/${tournamentId}/${userId}`);
  }
}
