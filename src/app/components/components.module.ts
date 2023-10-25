import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    //cuando estamos trabajando con ionic
    IonicModule
  ],
  exports: [
    ArticlesComponent,
  ]
})
export class ComponentsModule { }
