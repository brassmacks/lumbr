import React from 'react'
import Movie from '../../../app/assets/images/movie.png'
import PostButton from '../../components/dashboard/post_button'
import Photo from '../../../app/assets/images/Photo.png'
import Quote from '../../../app/assets/images/Quote.png'
import Text from '../../../app/assets/images/Text.png'

export const NewPostNav = () => {
  const Lnk = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/Link.png'
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
