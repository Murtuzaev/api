import React, { useContext } from 'react'
import ThemeContext from '../content/ThemeContext'

const Button = () => {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <>
     <h1>Active theme - {(theme)}</h1>
     <button onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>Click</button>
    </>
  )
}

export default Button