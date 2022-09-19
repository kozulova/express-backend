import { Router } from 'express';
import ArticlesController from '../controllers/articles.controller';
import { CreateArticleDto } from '../dtos/articles.dto';
import { Routes } from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class ArticlesRoute implements Routes {
  public path = '/articles';
  public router = Router();
  public articlesController = new ArticlesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.articlesController.getArticles);
    this.router.get(`${this.path}/:id(\\d+)`, this.articlesController.getArticleById);
    this.router.post(`${this.path}`, validationMiddleware(CreateArticleDto, 'body'), this.articlesController.createArticle);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateArticleDto, 'body', true), this.articlesController.updateArticle);
    this.router.delete(`${this.path}/:id(\\d+)`, this.articlesController.deleteArticle);
  }
}

export default ArticlesRoute;
