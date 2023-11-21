import React from 'react'
import "./Index.css"

const Card = ({title,description,img,buttonText,btnBckColor}) => {
  // console.log(props.title)
  // const myBtn={
  //   padding:"20px",
  //   color:"white",
  //   fontSize:"28px"
  // }
  return (
    <div className='card'>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={img} alt="" />
        <button style={{background:btnBckColor}}>{buttonText}</button>
    </div>
  )
}

export default Card
