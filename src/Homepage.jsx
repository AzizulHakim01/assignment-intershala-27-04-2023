import React from 'react'
import Header from './components/Header'
import TestComp from './components/testComp'

const Homepage = () => {
  return (
    <>
        <Header/>
        <div className="row">
            <TestComp/>
        </div>
    </>
  )
}

export default Homepage