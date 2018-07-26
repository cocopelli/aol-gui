import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {Location} from '@angular/common';

import {SongListComponent} from './song-list.component';
import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SongApiService} from '../shared/song-api.service';
import {Song} from '../shared/song';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs/internal/observable/of';

@Component({
  template: `
    <router-outlet></router-outlet>`
})
class DummyOutletComponent {
}

@Component({
  template: `Dummy`
})
class DummyDetailsComponent {
}

const routes: Routes = [
  {path: '_id', component: DummyDetailsComponent}
];

describe('SongListComponent', () => {
  let component: SongListComponent;
  let fixture: ComponentFixture<SongListComponent>;

  const expectSongs: Song[] = [
    new Song('123abc', 'Hyper Hyper', 123, 'Hyper12 Hyper12', 'The first song', '789xyz'),
    new Song('456def', 'Yipie Yipie', 456, 'Yipie23 Yipie23', 'The second song', '678hij')
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DummyOutletComponent,
        SongListComponent,
        DummyDetailsComponent
      ],
      providers: [{
        provide: SongApiService,
        useValue: {getAll: () => of(expectSongs)}
      }],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.createComponent(DummyOutletComponent);
    fixture = TestBed.createComponent(SongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display songs', () => {

    expect(component.songs.length).toBe(2);
    expect(component.songs[0]._id).toBe('123abc');
    expect(component.songs[1]._id).toBe('456def');
  });

  // it('should navigate to details page by id', async(inject([Location], (location) => {
  //
  //   fixture.nativeElement.querySelector('#listItem').click();
  //
  //   fixture.whenStable().then(() => {
  //     expect(location.path()).toEqual('/123abc');
  //   });
  // })));
});
