import React from 'react'

const  Card = (props) => {
    return (
   <div className=''>
   <div className=" shadow card mb-3 mt-3" style={{backgroundColor:"RGB(146, 168, 209)"}}>
   <div className="card-title mx-2 ">
   <h3>{props.value.title}</h3>
   </div>
   <div className="card-body">
   <p>{props.value.body}</p>
   </div>
   </div>
   </div>
    )
}



const Product = (props) => {
  return (
    <div>
    {props.data.map((value) => (
        <Card value={value} />
    ))}
    </div>
  )
}

export default Product