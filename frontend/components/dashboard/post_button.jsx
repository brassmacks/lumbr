import React from 'react'
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import { createPost } from '../../actions/post_actions';

const PostButton = ({button, openModal, freeze}) => {
  //  ACTION_ITEM 1.1 SET LABELS TO BASELINE
    // SIMILAR TO FOLLOW/POST AUTHOR
  let type = button[0];
  let src = button[1];
  const openPostModal = () => {
    openModal("new " + type + " post")
    // freeze()
  }
  return (
    <div key={src + 'button'}>
      <button id="post-nav-button" className="post-nav" onClick={ () => openPostModal()}>        
        <div className="post-button-column">
        <label id='post-nav-button-label' className="post-nav">
          <div id="button-pad">
          <img id='pnii' className='post-nav' src={src} width='40px' />
          </div>
            {type}
          </label>
        </div>
      </button>
    </div>
  )
}

const mSTP = state => ({});
const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})
export default connect(mSTP, mDTP)(PostButton)