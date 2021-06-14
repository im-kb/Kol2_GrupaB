import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../model/Post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kb-forum-item',
  templateUrl: './kb-forum-item.component.html',
  styleUrls: ['./kb-forum-item.component.css']
})
export class KbForumItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
