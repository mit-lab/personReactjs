import React from 'react'


function ChildData(props) {
    console.log("---", props.data);
    return(
      <li className="data_li">
        <a className="data_a" target='blank_' href={props.data.a}>
          <img className="data_img" src={props.data.img} alt={props.data.alt} />
          <span className="data_span">
            <h2 className="data_h2">{props.data.h2}</h2>
            <p className="data_p">{props.data.p}</p>
          </span>
        </a>
      </li>
    )
  }


export default ChildData;
