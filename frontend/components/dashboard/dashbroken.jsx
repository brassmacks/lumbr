import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import PostShowContainer from "../posts/post_show_container"
import Movie from '../../../app/assets/images/movie.png'
import Lnk from '../../../app/assets/images/Link.png'
import Photo from '../../../app/assets/images/Photo.png'
import Quote from '../../../app/assets/images/Quote.png'
import Text from '../../../app/assets/images/Text.png'
import { PostButton } from './post_button'


class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    let buttons = [['Movie', Movie], ['Lnk', Lnk], ['Photo', Photo], ['Quote', Quote], ['Text', Text]]
    return (
      <div>
        <div>
          <ul>
            {
              buttons.forEach(button => {
                let type, src = button
                return (
                  <li>
                    <a>hads</a>
                    <PostButton type={type} button={button}/>
                  </li>)
              })
            }
            </ul>
            <div>
              <PostIndexContainer />
            </div>
          
        </div>
      </div>

    )
  }

}
export default Dashboard

