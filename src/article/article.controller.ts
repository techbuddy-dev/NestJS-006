import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus, NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() articleDto: ArticleDto) {
    return this.articleService.create(articleDto);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const article = this.articleService.findOne(id);
    if (article === undefined) {
      throw new NotFoundException(`Article with id ${id} not found.`);
      // throw new HttpException(`Article with id ${id} not found.`, HttpStatus.NOT_FOUND);
    }
    return article;
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() articleDto: ArticleDto) {
    return this.articleService.update(id, articleDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.delete(id);
  }
}
