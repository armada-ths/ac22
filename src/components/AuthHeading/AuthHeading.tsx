import React, { FC } from 'react'
import Icon from './AuthIcon.png'
import "./AuthHeading.css"

interface Props {
    title: string,
}

const AuthHeading: FC<Props> = ({ title }) => {
  return (
    <div className='heading-container'>
      <img src={Icon} alt={title} className="heading-icon"/>
      <div className='heading-title'>{title}</div> 
    </div>
  )
}

export default AuthHeading