import React from 'react'
import candy from "./assets/candy.jpeg"
import computer from "./assets/computer.png"
import phone from "./assets/phone.png"
import { ProductCard } from './component/ProductCard'
import "./App.css"
export default function App () {
  return (
    <div className='container'>
      <h1>Hello World I am Christina</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <ProductCard title={"candy"} price={2.75} imgurl={candy} />
        </div>
        <div className="col-md-4 mb-3">
          <ProductCard title={"phone"} price={299.99} imgurl={phone} />
        </div>
        <div className="col-md-4 mb-3">
          <ProductCard title={"computer"} price={3000} imgurl={computer} />
        </div>
      </div>
    </div>
  );
}
