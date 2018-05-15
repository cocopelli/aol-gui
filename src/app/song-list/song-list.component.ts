import {Component, OnInit} from '@angular/core';
import {Song} from '../shared/song';
import {SongApiService} from '../shared/song-api.service';

@Component({
  selector: 'aol-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songs: Song[];

  constructor(private ss: SongApiService) {
  }

  ngOnInit() {
    this.ss.getAll().subscribe(res => this.songs = res);
  }

}
