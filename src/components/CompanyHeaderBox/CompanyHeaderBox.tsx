import React, { FC } from 'react'

import InfoLayout from '../InfoLayout/InfoLayout';

interface Props {
    img: string;
    icon: string;
    title: string;
    info: string;

}

const CompanyHeaderBox: FC<Props> = ({ img, icon, title, info }) => {
  return (
    <div className={'icon-box ' + icon}>
        <img src={img} alt={"icon " + icon}></img>
        <InfoLayout title={title} info={info}/>
    </div>
  )
}

export default CompanyHeaderBox