import {TestBed, getTestBed} from '@angular/core/testing';

import {SongApiService} from './song-api.service';
import {Song} from './song';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SongApiService', () => {

  let injector;
  let service: SongApiService;
  let httpMock: HttpTestingController;

  const expectSongs: Song[] = [
    new Song('123abc', 'Hyper Hyper', 123, 'Hyper12 Hyper12', 'The first song', '789xyz'),
    new Song('456def', 'Yipie Yipie', 456, 'Yipie23 Yipie23', 'The second song', '678hij')
  ];


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

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getSongs', () => {

    it('should return an Observable<Song[]>', () => {


      service.getAll().subscribe(songs => {
        expect(songs.length).toBe(2);
        expect(songs).toEqual(expectSongs);
      });

      const req = httpMock.expectOne(`${service.api}`);
      expect(req.request.method).toBe('GET');
      req.flush(expectSongs);
    });


    it('shpuld get the correct single song', () => {

      service.getSingle('123abc').subscribe(song => {
        expect(song.title).toBe('Hyper Hyper');
        expect(song).toEqual(expectSongs[0]);
      });

      const req = httpMock.expectOne(`${service.api}/123abc`);
      expect(req.request.method).toBe('GET');
      req.flush(expectSongs[0]);
    });

  });

  // it('should throw error', () => {
  //
  //   service.getSingle('3434').subscribe((error) => {
  //       expect(error).toThrow(new Error());
  //       console.log(error);
  //     }
  //   );
  //
  //   const req = httpMock.expectOne(`${service.api}/3434`);
  //   expect(req.error).toThrow();
  //   req.flush(null);
  // });

});
