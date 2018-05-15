import {TestBed, inject, getTestBed} from '@angular/core/testing';

import {SongApiService} from './song-api.service';
import {Song} from '../shared/song';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SongApiService', () => {

  let injector;
  let service: SongApiService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SongApiService
      ]
    });

    injector = getTestBed();
    service = injector.get(SongApiService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getSongs', () => {
    it('should return an Observable<Song[]>', () => {
      const expectSongs: Song[] = [
        new Song('123abc', 'Hyper Hyper', 123, 'Hyper12 Hyper12', 'The first song', '789xyz'),
        new Song('456def', 'Yipie Yipie', 456, 'Yipie23 Yipie23', 'The second song', '678hij')
      ];
      service.getAll().subscribe(songs => {
        expect(songs.length).toBe(2);
        expect(songs).toEqual(expectSongs);
      });

      const req = httpMock.expectOne(`${service.api}`);
      expect(req.request.method).toBe('GET');
      req.flush(expectSongs);
    });
  });

  it('should be created', inject([SongApiService], (service: SongApiService) => {
    expect(service).toBeTruthy();
  }));
});
