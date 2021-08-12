// import React from 'react'
// import Blog from '../blog/blog_edit_container'

// class Modal extends React.Component {
//   constructor(props){
//     super(props)
    
//   }

//   componentDidMount() {
//     if (this.props.modal === <Blog />) {
//       this.props.fetchBlog(this.props.currentUser.id)
//     }
//   }
  
//   render () {
//     if (!this.props.modal) { return null };
 
//     return (
//       <div className="modal-background" onClick={this.props.closeModal}>
//       <div className="modal-child" onClick={e => e.stopPropagation()}>
//         { this.props.modal }
//       </div>
//     </div>
//   );
//   }
// }
// export default Modal