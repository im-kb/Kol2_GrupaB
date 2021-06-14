import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/Post';
import {KBDataService} from '../../services/kb-data.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-kb-forum',
  templateUrl: './kb-forum.component.html',
  styleUrls: ['./kb-forum.component.css']
})
export class KbForumComponent implements OnInit {
  public posts: Post[];
  constructor(private kbService: KBDataService) { }

  ngOnInit() {
    this.getItems();
  }


  public getItems(): void {
    this.kbService.getPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
