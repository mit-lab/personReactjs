import React from 'react'
import personPhoto from '../img/ava.jpg'


function ChildPhoto() {

  return (
    <div className='profileWrapper'>
      <div className='profile'>
        <img className="profile_img" src={personPhoto} alt='фото' />
        <h1>Renat Khakimov</h1>
      </div>
    </div>
  );
}

export default ChildPhoto;
