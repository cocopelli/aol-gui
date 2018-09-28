import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SongListComponent} from './song-list/song-list.component';
import {HomeComponent} from './home/home.component';
import {SongApiService} from './shared/song-api.service';
import {HttpClientModule} from '@angular/common/http';
import {SongFormComponent} from './song-form/song-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SongDetailsComponent} from './song-details/song-details.component';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatInputModule
} from '@angular/material';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    HomeComponent,
    SongFormComponent,
    SongDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    CommonModule,   // Material Table
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [SongApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
