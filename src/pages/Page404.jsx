import React from 'react'
import { Link } from "react-router-dom";
import '../style/page404.css'

const Page404 = () => {
  return (
<div className="page-404">
    <h1>404</h1>
    <p>Page Not Found !!!</p>
    <Link to="/">Go Back</Link>
</div>
  )
}

export default Page404