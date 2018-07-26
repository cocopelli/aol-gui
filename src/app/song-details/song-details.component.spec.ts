import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SongDetailsComponent} from './song-details.component';
import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SongApiService} from '../shared/song-api.service';
import {of} from 'rxjs/internal/observable/of';
import {Song} from '../shared/song';

@Component({
  template: '<router-outlet></router-outlet>'
})
class DummyOutletComponent {
}

@Component({
  template: 'Dummy'
})
class DummyFormComponent {
}

const routes: Routes = [
  {path: '_id', component: DummyFormComponent}
];

describe('SongDetailsComponent', () => {
  let component: SongDetailsComponent;
  let fixture: ComponentFixture<SongDetailsComponent>;

  const expectSong: Song =
    new Song('123abc', 'Hyper Hyper', 123, 'Hyper12 Hyper12', 'The first song', '789xyz');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DummyOutletComponent,
        SongDetailsComponent,
        DummyFormComponent
      ],
      providers: [{
        provide: SongApiService,
        useValue: {getSingle: () => of(expectSong)}
      }],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display one song', () => {

    expect(component.song._id).toBe('123abc');
  });
});
