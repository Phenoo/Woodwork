import React from 'react'

const Tophead = ({title, align}) => {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold uppercase ${align} tracking-wider  `}>
      {title}
    </h2>
  )
}

export default Tophead