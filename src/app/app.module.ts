import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { HomeComponent } from './home/home.component';
import {SongApiService} from './shared/song-api.service';
import {HttpClientModule} from '@angular/common/http';
import { SongFormComponent } from './song-form/song-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SongDetailsComponent } from './song-details/song-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    HomeComponent,
    SongFormComponent,
    SongDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SongApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
