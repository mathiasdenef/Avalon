import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../../app/models/tournament';
import { LeaderboardUser } from '../../app/models/leaderboard-user';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  baseUrl: string = '/Restapi/v1/tournaments';

  constructor(private http: HttpClient) { }

  getAllTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.baseUrl}`);
  }

  getLeaderboardByTournamentId(tournamentId: number): Observable<LeaderboardUser[]> {
    return this.http.get<LeaderboardUser[]>(`${this.baseUrl}/${tournamentId}/Leaderboard`);
}

}
