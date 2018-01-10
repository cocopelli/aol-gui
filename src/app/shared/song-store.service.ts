import { Injectable } from '@angular/core';
import {Song, Lyric} from './song';

@Injectable()
export class SongStoreService {
  songs: Song[];

  constructor() {
    this.songs = [
      new Song(
        '3694b64c3',
        'So klingt Liebe',
        218,
        'Bodypop',
        'Aus dem Album Bodypop 2006',
        new Lyric('9898abc1212', 'So klingt Liebe', `Hier auf meiner Party
                                                                    Schlummert ein Star
                                                                    Wie ihn noch keiner sah
                                                                    Sie darf neben mir liegen
                                                                    Und setzt sich auf mich
                                                                    Sing noch ein bißchen für mich`)
      ),
      new Song(
        '4567gu891',
        'Fehlschlag errorMix',
        289,
        'Club Mix',
        'Aus dem Album Aggressor',
        new Lyric('6543we321', 'Fehlschlag', `Sorgenious wie hier
                                                             Wählen wir an dunklen Tagen
                                                             Mediendruck und Gier
                                                             Dominiereren längst nicht mehr`)
      )
    ];
  }

  getAll() {
    return this.songs;
  }

}
