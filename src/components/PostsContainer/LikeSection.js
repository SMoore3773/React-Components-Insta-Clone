import React from 'react';

const LikeSection = props => {
    console.log(props)
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i onClick={()=> props.setLikes(props.likes +1)} className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
      {props.likes} Likes</p>
</div>
  )
};

export default LikeSection;
