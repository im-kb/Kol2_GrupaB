import {Component, OnInit} from '@angular/core';
import {KBDataService} from "../../services/kb-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-kb-forum-details',
  templateUrl: './kb-forum-details.component.html',
  styleUrls: ['./kb-forum-details.component.css']
})
export class KbForumDetailsComponent implements OnInit {
  id: number = 0;
  title: string = '';
  text: string = '';
  image: string = '';

  constructor(private kbService: KBDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string;
    this.route.paramMap.subscribe(params => {
      id = <string>params.get('id');
    });
    this.kbService.getPostById(id).subscribe(res => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
    });

  }
}
