export class Song {
  constructor(
    public _id: string,
    public title: string,
    public duration: number,
    public lyricId: string,
    public subtitle?: string,
    public description?: string
  ) {}
}
