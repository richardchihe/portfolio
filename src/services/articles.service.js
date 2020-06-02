import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/articles/';

class ArticleService {
  getArticles() {
    return axios.get(API_URL);
  }

  postArticle(title, description, markdown) {
    return axios
      .post(API_URL + "new", {
        title,
        description,
        markdown
      }, { headers: authHeader() });
  }

  getArticle(slug) {
    return axios.get(API_URL + slug);
  }

  updateArticle(id, title, description, markdown) {
    return axios
      .put(API_URL + "update", {
        id,
        title,
        description,
        markdown
      }, { headers: authHeader() });
  }
}

export default new ArticleService();