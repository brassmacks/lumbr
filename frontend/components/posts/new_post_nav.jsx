import React from 'react'
import PostButton from '../../components/dashboard/post_button'

export const NewPostNav = (location) => {

  const Lnk = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/Link.png'
  const Quote = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/Quote.png'
  const Text = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/Text.png'
  const Photo = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/Photo.png'
  const Movie = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/movie.png'
  
  let buttons = [['Text', Text], ['Photo', Photo], ['Quote', Quote], ['Link', Lnk], ['Video', Movie]]
  return (
    
    
    <div id="post-nav-panel" className="post-nav">
      <div id="spacer" className="post-nav">

        <ul className="post-nav" id="post-nav-buttons-list">
          {
            buttons.map((button, i) => {
              let type, src = button
              return (
                <li id="post-nav-list-item"
                  className="post-nav"
                  key={`${i} ${button}`}>

                  {/* <PostButton id="post-nav-button" freeze={this.props.freeze} button={button} /> */}
                  <PostButton id="post-nav-button" button={button} />
                </li>)
            })
          }
        </ul>

      </div>
    </div>
  )
}
