import React from 'react'


function ChildPhoto(props) {

  return (
    <div className='profileWrapper'>
      <div className='profile'>
        <img className="profile_img" src={props.img} alt={props.alt} />
        <h1>{props.h1}</h1>
      </div>
    </div>
  );
}

export default ChildPhoto;
