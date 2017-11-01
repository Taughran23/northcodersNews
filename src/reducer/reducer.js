import * as types from '../actions/types';

export const initialState = {
  article: {},
  articles: [],
  comments: [],
  topics: [],
  userProfile:{},
  selectedTopic: null,
  loading: false,
  error: null
};


export default function reducer(prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLES_REQUEST) {

    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    // if you get an error - reset your articles to an empty array so it won't display random stuff
    newState.articles = [];
    // reset loading
    newState.loading = false;
    return newState;
  }
  if (action.type === types.FETCH_TOPIC_TITLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_TITLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topics = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_TITLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    // if you get an error - reset your articles to an empty array so it won't display random stuff
    newState.topics = [];
    // reset loading
    newState.loading = false;
    return newState;
  }
  if (action.type === types.FETCH_TOPIC_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_TOPIC_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    // if you get an error - reset your articles to an empty array so it won't display random stuff
    newState.articles = [];
    // reset loading
    newState.loading = false;
    return newState;
  }
  if (action.type === types.FETCH_COMMENTS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.comments = Object.assign([], action.data);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    // if you get an error - reset your articles to an empty array so it won't display random stuff
    newState.article = {};
    // reset loading
    newState.loading = false;
    return newState;
  }
  if (action.type === types.FETCH_ARTICLE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.article = action.data;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.article = {};
    // reset loading
    newState.loading = false;
    return newState;
  }
  if (action.type === types.COMMENT_VOTE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.COMMENT_VOTE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newData = newState.comments.slice();
    newData.map((comment) => {
      if (comment._id === action.commentId) {
        if (action.vote === 'up') {
          comment.votes++;
          return comment;
        }
        comment.votes--;
        return comment;
      }
      return comment;
    });
    newState.comments = newData;
    newState.loading = false;

    return newState;
  }
  if (action.type === types.COMMENT_VOTE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    return newState;
  }
  if (action.type === types.ADD_COMMENT_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }
  if (action.type === types.ADD_COMMENT_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newData = newState.comments.slice();
    newData.push(action.data);
    newState.comments = newData;
    return newState;
  }
  if (action.type === types.ADD_COMMENT_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    return newState;
  }
  if (action.type === types.ARTICLE_VOTE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ARTICLE_VOTE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    const newData = newState.articles.slice();
    newData.map((article) => {
      if (article._id === action.articleId) {
        if (action.vote === 'up') {
          article.votes++;
          return article;
        }
        article.votes--;
        return article;
      }
      return article;
    });
    newState.articles = newData;
    newState.loading = false;

    return newState;
  }
  if (action.type === types.ARTICLE_VOTE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.article = {};
    // reset loading
    newState.loading = false;
    return newState;
  }
  if (action.type === types.USER_PROFILE_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }
  if (action.type === types.USER_PROFILE_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.userProfile = action.userProfile;
    newState.loading = false;
    return newState;
  }
  if (action.type === types.USER_PROFILE_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.userProfile = {};
    // reset loading
    newState.loading = false;
    return newState;
  }
  return prevState;
}
