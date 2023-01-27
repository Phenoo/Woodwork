import React from 'react'

const Tophead = ({title, align}) => {
  return (
    <h4 className={`text-3xl font-bold uppercase ${align}  `}>
      {title}
    </h4>
  )
}

export default Tophead