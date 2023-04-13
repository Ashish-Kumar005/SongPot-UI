import React from 'react'
import Header from './Header'
const TopSection = ({title, name}) => {
  return (
    <div className="section1">
        <Header />
        <div className="section1-heading">
          <h1 id={name}>{title}</h1>
        </div>
      </div>
  )
}

export default TopSection