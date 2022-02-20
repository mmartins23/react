import React from "react"

export default function Menu (props) {
    
    return (
      <ul className='menu'>
        {props.links.map((link, index) => <li key={index}>{link}</li>)}
      </ul>
    )
  }