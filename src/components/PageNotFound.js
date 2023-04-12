import React from 'react'
import TopSection from './TopSection'

const PageNotFound = () => {
    document.title = "Page Not Found"
  return (
    <div>
        <TopSection title='Page Not found'/>
    </div>
  )
}

export default PageNotFound