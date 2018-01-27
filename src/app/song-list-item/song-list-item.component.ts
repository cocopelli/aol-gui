import {Component, Input} from '@angular/core';
import {Song} from '../shared/song';

@Component({
  selector: 'tr.aol-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.css']
})
export class SongListItemComponent {
  @Input() song: Song;

}
