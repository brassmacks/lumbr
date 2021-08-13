import React from 'react'
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'

const PostButton = ({button, openModal}) => {
  let type = button[0];
  let src = button[1];
  return (
    <div key={src + 'button'}>
      <button onClick={() => openModal("new " + type + " post")}>        
        <div className="post-button-column">
        <label>
          <img src={src} width='40px' />
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