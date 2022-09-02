import React, { useContext } from 'react'
import ThemeContext from '../content/ThemeContext'
import Button from './Button'
import Header from './Header'

const Containr = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme==="dark" ? theme : ""}`}>
        <Header/>
        <hr />
        <Button/>
    </div>
  )
}

export default Containr