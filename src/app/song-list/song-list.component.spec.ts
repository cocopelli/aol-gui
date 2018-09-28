import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {Location} from '@angular/common';

import {SongListComponent} from './song-list.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SongApiService} from '../shared/song-api.service';
import {Song} from '../shared/song';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs/internal/observable/of';
import {MatTableModule} from '@angular/material';

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
    new Song('123abc', 'Hyper Hyper', 123, '789xyz', 'The first song', 'Hyper12 Hyper12'),
    new Song('456def', 'Yipie Yipie', 456, '678hij', 'The second song', 'Yipie23 Yipie23'),
    new Song('999zzz', 'dritter Song', 999, 'Song3IdLyric', 'The last Song', 'Letzte von drei')
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
        HttpClientTestingModule,
        MatTableModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
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

    expect(component.dataSource.data.length).toBe(3);

    expect(component.dataSource.data[0]).toEqual(jasmine.objectContaining({
      _id: '123abc',
      title: 'Hyper Hyper'
    }));
    expect(component.dataSource.data[1]).toEqual(jasmine.objectContaining({
      _id: '456def',
      title: 'Yipie Yipie',
      duration: 456,
      lyricId: '678hij'
    }));
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
