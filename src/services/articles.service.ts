import { EntityRepository, Repository } from 'typeorm';
import { CreateArticleDto } from '../dtos/articles.dto';
import { ArticleEntity } from '../entities/articles.entity';
import { HttpException } from '../exceptions/HttpException';
import { Article } from '../interfaces/articles.interface';
import { isEmpty } from '../utils/util';

@EntityRepository()
class ArticleService extends Repository<ArticleEntity> {
  public async findAllArticle(): Promise<Article[]> {
    const articles: Article[] = await ArticleEntity.find();
    return articles;
  }

  public async findArticleById(articleId: number): Promise<Article> {
    if (isEmpty(articleId)) throw new HttpException(400, 'ArticleId is empty');

    const findArticle: Article = await ArticleEntity.findOne({ where: { id: articleId } });
    if (!findArticle) throw new HttpException(409, "Article doesn't exist");

    return findArticle;
  }

  public async createArticle(articleData: CreateArticleDto): Promise<Article> {
    if (isEmpty(articleData)) throw new HttpException(400, 'articleData is empty');

    const createArticleData: Article = await ArticleEntity.create({ ...articleData }).save();

    return createArticleData;
  }

  public async updateArticle(articleId: number, articleData: CreateArticleDto): Promise<Article> {
    if (isEmpty(articleData)) throw new HttpException(400, 'articleData is empty');

    const findArticle: Article = await ArticleEntity.findOne({ where: { id: articleId } });
    if (!findArticle) throw new HttpException(409, "Article doesn't exist");

    await ArticleEntity.update(articleId, { ...articleData });

    const updateArticle: Article = await ArticleEntity.findOne({ where: { id: articleId } });
    return updateArticle;
  }

  public async deleteArticle(articleId: number): Promise<Article> {
    if (isEmpty(articleId)) throw new HttpException(400, 'ArticleId is empty');

    const findArticle: Article = await ArticleEntity.findOne({ where: { id: articleId } });
    if (!findArticle) throw new HttpException(409, "Article doesn't exist");

    await ArticleEntity.delete({ id: articleId });
    return findArticle;
  }
}

export default ArticleService;
