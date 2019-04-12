import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';


const button = (props) => {
  let template = null;

  switch(props.type){
    case('loadmore'):
      template = (
        <div className='blue_btn'
            onClick={props.loadMore}
        >
          {props.cta}
        </div>
      );
      break;
    case('linkTo'):
      template = (
        <Link to={props.linkTo}
          className='blue_btn'>
          {props.cta}
        </Link>
      )
      break;
    default:
      template=null;
  }
  return template
}

export default button
