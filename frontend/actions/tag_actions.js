import * as TagApiUtil from '../util/tag_util';

export const RECEIVE_TAG_ID = 'RECEIVE_TAG_ID'
export const RECEIVE_TAGGED = 'RECEIVE_TAGGED'

const receiveTagged = taggedArray => ({
  type: RECEIVE_TAGGED,
  taggedArray 
})
const receiveTagId = tagId => ({
  type: RECEIVE_TAG_ID,
  tagId
})

export const fetchTagId = tag => dispatch => (
  TagApiUtil.fetchTagId(tag)
    .then(tagId => dispatch(receiveTagId(tagId)))
);
export const fetchTagged = tagId => dispatch => (
  TagApiUtil.fetchTagged(tagId)
    .then(taggedArray => dispatch(receiveTagged(taggedArray)))
);

