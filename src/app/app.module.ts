import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongListItemComponent } from './song-list-item/song-list-item.component';
import {SongStoreService} from './shared/song-store.service';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SongStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
