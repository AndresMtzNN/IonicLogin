import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.page.html',
  styleUrls: ['./news-view.page.scss'],
})
export class NewsViewPage implements OnInit {
  article;
  constructor(private newService : NewService) { }

  ngOnInit() {
    this.article = this.newService.currentArticle;
  }

}
