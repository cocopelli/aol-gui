import {Song} from './song';
import {SongRaw} from './song-raw';

export class SongFactory {

  static empty(): Song {
    return new Song('', '', 0, '', '', '');
  }

  static fromObject(rawSong: SongRaw | any): Song {
    return new Song(
      rawSong.id,
      rawSong.title,
      rawSong.duration,
      rawSong.subtitle,
      rawSong.description,
      rawSong.lyricId
    );
  }
}
