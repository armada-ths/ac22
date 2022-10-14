import React, { FC } from 'react'

interface Props {
    placeholder: string;
}

const Component: FC<Props>= ({ placeholder }) =>{
  return (
    <div>{placeholder}</div>
  )
}

export default Component