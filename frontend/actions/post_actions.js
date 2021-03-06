import * as PostApiUtil from '../util/post_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
// export const RECEIVE_BLOGS_POSTS = 'RECEIVE_BLOGS_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});


const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});
// fetch blog posts
export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);
export const fetchBlogsPosts = blogId => dispatch => (
  PostApiUtil.fetchBlogsPosts(blogId)
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = postId => dispatch => (
  PostApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);


export const createPhotoPost = post => dispatch => (
  PostApiUtil.createPhotoPost(post)
    .then(post => dispatch(receivePost(post)))
);
export const createRePost = ([postId, userId]) => dispatch => (
  PostApiUtil.createRePost([postId,userId])
  .then(post => dispatch(receivePost(post)))
)
export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => {
  return (
  PostApiUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)};