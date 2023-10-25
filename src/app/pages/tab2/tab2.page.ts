import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public categories: string[] = ['business','entertainment','general','health','science','sports','technology']
  public selectedCategory: string = this.categories[0];
  
  public article: Article[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
      this.newsService.getToHeadLinesByCategory(this.selectedCategory)
      .subscribe(article =>{
        //this.article.push(...article)    
        this.article = [...this.article, ...article]    
      })
  }

  //recibo una categoria
  segmentChanged(categoria: any) {
    this.selectedCategory = categoria.detail.value;
    console.log(categoria.detail.value);
    this.newsService.getToHeadLinesByCategory(this.selectedCategory)
    .subscribe(article =>{
      this.article = [...article]       
    })

  }

}
