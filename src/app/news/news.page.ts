import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data : any;
  constructor(private newService : NewService, private rotuer: Router){ }

  ngOnInit() {
    this.newService.getData('top-headlines?country=us&category=business')
      .subscribe( data => {
          this.data = data;
      })
  }


  onGotonewsviewPage(article){
    this.newService.currentArticle = article;
    this.rotuer.navigate(['/news-view']);
  }
}
