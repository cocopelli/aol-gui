export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}

export const SongFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Ein Songtitel muss angegeben werden'),
  new ErrorMessage('duration', 'required', 'Die Länge des Songs muss angegeben werden'),
  new ErrorMessage('duration', 'durationLength', 'Der Song sollte länger als 0 Sekunden dauern'),
  new ErrorMessage('lyricId', 'required', 'Song sollte mit einem Songtext veknüpft werden')
];

