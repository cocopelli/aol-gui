import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SongApiService} from '../shared/song-api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'aol-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['title', 'duration', 'lyricId'];
  dataSource = new MatTableDataSource();

  constructor(private ss: SongApiService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.ss.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
