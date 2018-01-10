import { TestBed, inject } from '@angular/core/testing';

import { SongStoreService } from './song-store.service';

describe('SongStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongStoreService]
    });
  });

  it('should be created', inject([SongStoreService], (service: SongStoreService) => {
    expect(service).toBeTruthy();
  }));
});
