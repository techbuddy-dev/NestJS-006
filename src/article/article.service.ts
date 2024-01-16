import { Injectable } from '@nestjs/common';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
  private articles: ArticleDto[] = [];

  create(articleDto: ArticleDto) {
    this.articles.push(articleDto);
    return articleDto;
  }

  findAll() {
    return this.articles;
  }

  findOne(id: number) {
    return this.articles.find(article => article.id === id);
  }

  update(id: number, articleDto: ArticleDto) {
    const index = this.articles.findIndex(article => article.id === id);
    this.articles[index] = articleDto;
    return articleDto;
  }

  delete(id: number) {
    const index = this.articles.findIndex(article => article.id === id);
    this.articles.splice(index, 1);
    return { deleted: true };
  }
}
