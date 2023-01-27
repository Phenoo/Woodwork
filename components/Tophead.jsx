import React from 'react'

const Tophead = ({title, align}) => {
  return (
    <h2 className={`text-3xl font-bold uppercase ${align}  `}>
      {title}
    </h2>
  )
}

export default Tophead