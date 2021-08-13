import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import PostShowContainer from "../posts/post_show_container"
import Movie from '../../../app/assets/images/movie.png'
import PostButton from './post_button'
import Photo from '../../../app/assets/images/Photo.png'
import Quote from '../../../app/assets/images/Quote.png'
import Text from '../../../app/assets/images/Text.png'




class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    const Lnk = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/Link.png'
    let buttons = [['Text', Text], ['Photo', Photo], ['Quote', Quote], ['Lnk', Lnk], ['Movie', Movie] ]
    return (
      <div>
        <div>
          <ul>
            {
              buttons.map((button, i )=> {
                let type, src = button
                return (
                  <li key={i}>
                    <PostButton button={button} />
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