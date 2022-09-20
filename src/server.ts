import App from './app';
import IndexRoute from './routes/index.route';
import ArticleRote from './routes/articles.route';

const app = new App([new IndexRoute(), new ArticleRote()]);

app.listen();
