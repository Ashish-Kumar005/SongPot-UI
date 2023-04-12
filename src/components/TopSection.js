import React from 'react'
import Header from './Header'
const TopSection = ({title}) => {
  return (
    <div className="section1">
        <Header />
        <div className="section1-heading">
          <h1>{title}</h1>
        </div>
      </div>
  )
}

export default TopSection