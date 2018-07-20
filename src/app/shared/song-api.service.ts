import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from './song';
import {SongRaw} from './song-raw';
import {catchError, map} from 'rxjs/operators';
import {SongFactory} from './song-factory';
import {Observable} from 'rxjs/internal/Observable';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class SongApiService {

  readonly api = 'http://localhost:3000/api/v1/Songs';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Song>> {
    return this.http
      .get<SongRaw[]>(`${this.api}`)
      .pipe(
        map(rawSongs => rawSongs
          .map(rawSong => SongFactory.fromObject(rawSong)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(songId: string): Observable<Song> {
    return this.http
      .get<SongRaw>(`${this.api}/${songId}`)
      .pipe(
        map(rawSong => SongFactory.fromObject(rawSong)),
        catchError(this.errorHandler)
      );
  }

  create(song: Song): Observable<any> {
    return this.http
      .post(`${this.api}`, song, {responseType: 'text'})
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(song: Song): Observable<any> {
    return this.http
      .put(`${this.api}/${song._id}`, song, {responseType: 'text'})
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(songId: string): Observable<any> {
    return this.http
      .delete(`${this.api}/${songId}`, {responseType: 'text'})
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}
