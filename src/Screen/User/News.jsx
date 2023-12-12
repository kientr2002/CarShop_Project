import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Feed from '../../component/Feed'
export class News extends Component {
  static propTypes = {

  }

  render() {
    return (    
    <div className="Body">
      <div className="row">
        {/* <h1 style={{color: "White", margin:"20px 20px"}}>Tin tức</h1> */}
        <Feed/>
        </div>
        </div>

        
    )
  }
}

export default News
