import React, { Component } from 'react'

export class NewsItem extends Component {

    // constructor(){
    //     super();
    // }
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
           <span  className="badge rounded-pill text-bg-danger position-absolute top-0 translate-middle" style={{left :'90%', zIndex:'1'}} >{source}</span>
            <img src={imageUrl?imageUrl:"https://www.elegantthemes.com/blog/wp-content/uploads/2021/02/facebook-paid-advertising-featured-image.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author? author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More </a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem