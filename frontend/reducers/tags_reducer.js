import {
  RECEIVE_TAG_ID,
  RECEIVE_TAGGED
} from '../actions/tag_actions'

const TagReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_TAG_ID:
      return action.tagId;
    case RECEIVE_TAGGED:
      return action.taggedArray;
    default:
      return oldState;
  }
}
export default TagReducer;