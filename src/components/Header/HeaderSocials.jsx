import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {TbBrandFiverr} from 'react-icons/tb'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/erickmwangi-10897621b" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' rel='noreferrer'><BsGithub/></a>
        <a href="https://linkedin.com" target='_blank' rel='noreferrer'><TbBrandFiverr/></a>
    </div>
  )
}

export default HeaderSocials