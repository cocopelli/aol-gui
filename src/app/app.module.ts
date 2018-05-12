import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { HomeComponent } from './home/home.component';
import {SongApiService} from './shared/song-api.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SongApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
