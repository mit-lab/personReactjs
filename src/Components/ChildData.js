import React from 'react'


function ChildData(props) {

  return (
    <li className="data_li">
      <a className="data_a" href={props.a}>
        <img className="data_img" src={props.img} alt={props.alt} />
        <span className="data_span">
          <h2 className="data_h2">{props.h2}</h2>
          <p className="data_p">{props.p}</p>
        </span>
      </a>
    </li>
  );
}

export default ChildData;
