import { NextFunction, Request, Response } from 'express';
import { CreateArticleDto } from '../dtos/articles.dto';
import { Article } from '../interfaces/articles.interface';
import articleService from '../services/articles.service';

class ArticlesController {
  public articleService = new articleService();

  public getArticles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllArticlesData: Article[] = await this.articleService.findAllArticle();

      res.status(200).json({ data: findAllArticlesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getArticleById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const articleId = Number(req.params.id);
      const findOneArticleData: Article = await this.articleService.findArticleById(articleId);

      res.status(200).json({ data: findOneArticleData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createArticle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const articleData: CreateArticleDto = req.body;
      const createArticleData: Article = await this.articleService.createArticle(articleData);

      res.status(201).json({ data: createArticleData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateArticle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const articleId = Number(req.params.id);
      const articleData: CreateArticleDto = req.body;
      const updateArticleData: Article = await this.articleService.updateArticle(articleId, articleData);

      res.status(200).json({ data: updateArticleData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteArticle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const articleId = Number(req.params.id);
      const deleteArticleData: Article = await this.articleService.deleteArticle(articleId);

      res.status(200).json({ data: deleteArticleData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ArticlesController;
