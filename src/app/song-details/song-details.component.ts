import { Component, OnInit } from '@angular/core';
import {SongStoreService} from '../shared/song-store.service';
import {ActivatedRoute} from '@angular/router';
import {Song} from '../shared/song';

@Component({
  selector: 'aol-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {
  song: Song;

  constructor(
    private ss: SongStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.song = this.ss.getSingle(params['id']);
  }

}
