import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Article } from '@interfaces/articles.interface';

@Entity('article')
export class ArticleEntity extends BaseEntity implements Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
