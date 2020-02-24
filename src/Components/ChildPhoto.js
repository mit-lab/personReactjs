import React from 'react'


function ChildPhoto(props) {
  console.log("---", props.data);
  return (
    <div className='profileWrapper'>
      <div className='profile'>
        <img className="profile_img" src={props.data.img} alt={props.data.alt} />
        <h1>{props.data.h1}</h1>
      </div>
    </div>
  );
}

export default ChildPhoto;
