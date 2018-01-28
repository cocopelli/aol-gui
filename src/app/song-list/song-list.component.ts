import {Component, OnInit} from '@angular/core';
import {Song} from '../shared/song';
import {SongStoreService} from '../shared/song-store.service';

@Component({
  selector: 'aol-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songs: Song[];

  constructor(private ss: SongStoreService) {
  }

  ngOnInit() {
    this.songs = this.ss.getAll();
  }

}
