import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
// import { NewsResponse } from '../../interface/index';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //inyectamos
  constructor(private NewsService: NewsService) { }

  ngOnInit() {

    this.NewsService.getNewsHeadLines()
      .subscribe(( resp) => {
        console.log(resp);
      });

  }

}
