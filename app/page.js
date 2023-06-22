"use client"
import Product from "./Product";
import Sidebar from "./sidebar";


const  Home = async() => {
let postData = await fetch("https://jsonplaceholder.typicode.com/posts")
postData = await postData.json()
  return (
   <div className="container">
    <div className="row">
    <div className="col-lg-2 mt-3 rounded text-center" style={{backgroundColor:"lightblue"}}>
    <Sidebar />
    </div>
    <div className="col-lg-10">
    <Product data={postData}/>
    </div>
    </div>
   </div>
  )
}

export default Home;