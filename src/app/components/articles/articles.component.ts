import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent  implements OnInit {

  //recibir datos de un componente a otro de los articulos
  @Input() articles: Article[]=[];

  constructor() { }

  ngOnInit() {}

}
