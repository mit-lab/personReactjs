import React from 'react'


// Components
import ChildPhoto from './ChildPhoto'
import ChildData from './ChildData'
import dataProfile from './Data/dataProfile'
import dataPerson from './Data/dataPerson'


function Parent() {

  const dataPersonElements = dataPerson.map((data, index) =>
    <div key = {index}><ChildPhoto data = {data} /></div>
  )

  const dataProfileElements = dataProfile.map((data, index) =>
    <li key = {index}><ChildData data = {data} /></li>
  )

  return(
    <div className='allWrapper'>
      {dataPersonElements}
      <ul className="data_ul">
        {dataProfileElements}
      </ul>
    </div>
  )
}

export default Parent;
