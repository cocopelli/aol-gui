import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongListItemComponent } from './song-list-item/song-list-item.component';
import {SongStoreService} from './shared/song-store.service';
import { HomeComponent } from './home/home.component';
import { SongDetailsComponent } from './song-details/song-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongListItemComponent,
    HomeComponent,
    SongDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SongStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
