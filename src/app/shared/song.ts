import { Lyric } from './lyric';
export { Lyric } from './lyric';

export class Song {
  constructor(
    public id: string,
    public title: string,
    public duration: number,
    public subtitle?: string,
    public description?: string,
    public lyric?: Lyric
  ) {}
}
