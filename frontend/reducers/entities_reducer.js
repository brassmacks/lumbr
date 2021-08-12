import { combineReducers } from "redux";
import PostsReducer from "./posts_reducer";
import usersReducer from "./users_reducer";
import TagReducer from "./tags_reducer";
import blogsReducer from "./blogs_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostsReducer,
  tags: TagReducer,
  blogs: blogsReducer
})