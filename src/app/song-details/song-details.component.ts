import { Component, OnInit } from '@angular/core';
import {SongFactory} from '../shared/song-factory';
import {Song} from '../shared/song';
import {SongApiService} from '../shared/song-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'aol-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  song: Song = SongFactory.empty();

  constructor(
    private ss: SongApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ss.getSingle(params['id'])
      .subscribe(s => this.song = s);
  }

}
