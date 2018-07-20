import {Component, OnInit} from '@angular/core';
import {SongFactory} from '../shared/song-factory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SongApiService} from '../shared/song-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SongFormErrorMessages} from './song-form-error-messages';
import {Song} from '../shared/song';

@Component({
  selector: 'aol-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {

  song = SongFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingSong = false;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ss: SongApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const songId = this.route.snapshot.params['id'];
    if (songId) {
      this.isUpdatingSong = true;
      this.ss.getSingle(songId).subscribe(song => {
        this.song = song;
        this.initSong();
      });
    }
    this.initSong();
  }

  initSong() {
    this.myForm = this.fb.group({
      title: [this.song.title, Validators.required],
      duration: [this.song.duration, Validators.required],
      lyricId: [this.song.lyricId, Validators.required],
      subtitle: this.song.subtitle,
      description: this.song.description
    });
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    const song: Song = SongFactory.fromObject(this.myForm.value);

    if (this.isUpdatingSong) {
      this.ss.update(song).subscribe(res => {
        this.router.navigate(['../../songs', song.id], {relativeTo: this.route});
      });
    } else {
      this.ss.create(song).subscribe(res => {
        this.song = SongFactory.empty();
        this.myForm.reset(SongFactory.empty());
      });
    }
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of SongFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
