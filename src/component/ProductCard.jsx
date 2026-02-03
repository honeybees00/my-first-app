import React from 'react'

export const ProductCard = ({title,imgurl,price}) => {
  return (
     <div className="card border-2" >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <img src={imgurl} className="card-img-top"/>
                    <p>${price}</p>
                </div>
                </div>
  )
}
