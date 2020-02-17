import React, {Component} from 'react'


// img
import email from '../img/mail.png'
import location  from '../img/loc.png'
import twitter from '../img/twit.png'
import gitHub from '../img/GH.png'
import facebook from '../img/facebook.png'
import vk from '../img/vk.png'
import personPhoto from '../img/ava.jpg'


// Components
import ChildPhoto from './ChildPhoto'
import ChildData from './ChildData'


function  Parent() {
  return (
    <div className='allWrapper'>
      <ChildPhoto img={personPhoto} h1={'Renat Khakimov'} alt={'photo'}/>
      <ul className="data_ul">
        <ChildData img={email} h2={'5022449@mail.ru'} p={'E-mail'} a={'mailto:5022449@mail.ru'} alt={'email'} />
        <ChildData img={location} h2={'Russia, Moscow'} p={'Location'} alt={'location'}
            a={'https://yandex.ru/maps/?um=constructor%3Ad58e13bb28b1094828fd73f0d0d2b01603d95e6d13422128badbb870627c15eb&source=constructorLink'} />
        <ChildData img={twitter} h2={'mitdeveloper'} p={'Twitter'} a={'https://twitter.com/mitdeveloper'} alt={'twitter'} />
        <ChildData img={gitHub} h2={'GitHub'} p={'MIT-lab'} a={'https://github.com/MIT-lab'} alt={'gitHub'} />
        <ChildData img={facebook} h2={'Facebook'} p={'Renat Khakimoff'} a={'https://www.facebook.com/100013556712300'} alt={'facebook'} />
        <ChildData img={vk} h2={'mitdeveloper'} p={'Vk'} a={'https://vk.com/mitdeveloper'} alt={'vk'} />
      </ul>
    </div>
    );
  }

export default Parent;
